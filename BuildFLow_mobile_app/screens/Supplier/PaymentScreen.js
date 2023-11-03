import axios from "axios";
import React, { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import commonStyles from "../../styles/common";

const PaymentScreen = ({ route, navigation }) => {
  const [amount, setAmount] = useState();
  const [method, setMethod] = useState();
  const [pNumber, setPNumber] = useState();

  const URL = "http://localhost:3000m/payment";

  const pay = () => {
    const payload = {
      orderID: route.params.orderID,
      amount: amount,
      paymentMethod: method,
      phoneNumber: pNumber,
    };

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Payment Success!",
          "Your Payment has Done!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("Dashboard", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                }),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View>
      <Image source={require("../../assets/Images/Payment.png")} style ={{height: "30%", width: "100%", marginTop: 10}} resizeMode = "contain" />
      <TextInput
        value={amount}
        keyboardType="decimal-pad"
        onChange={(e) => setAmount(e.nativeEvent.text)}
        style={commonStyles.textView}
        placeholder="Amount (LKR)"
      />
      <TextInput
        value={method}
        onChange={(e) => setMethod(e.nativeEvent.text)}
        style={commonStyles.textView}
        placeholder="Payment Method"
      />
      <TextInput
        value={pNumber}
        keyboardType="number-pad"
        onChange={(e) => setPNumber(e.nativeEvent.text)}
        style={commonStyles.textView}
        placeholder="Phone Number"
      />

      <TouchableOpacity onPress={() => pay()} style={commonStyles.button}>
        <Text style={{ color: "white" }}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
