import axios from "axios";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import commonStyles from "../../styles/common";

const NewInvoiceScreen = ({ route, navigation }) => {
  const [invoiceID, setInvoiceID] = useState("");
  const [location, setLocation] = useState("");
  const [orderID, setOrderID] = useState("");
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState(0);

  const URL = "http://localhost:3000/Invoices/Createinvoices";

  const createInvoice = () => {
    const payload = {
      InvoicesID: invoiceID,
      OrderID: orderID,
      location: location,
      Material: itemName,
      qty: qty,
      Amount: price,
    };

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Invoice Created!",
          "Your invoice has been created successfully!!",
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ScrollView style={{ width: "80%", margin: 2 }}>
        <TextInput
          value={invoiceID}
          onChange={(e) => setInvoiceID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Invoice ID"
        />
        <TextInput
          value={orderID}
          onChange={(e) => setOrderID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Order ID"
        />
        <TextInput
          value={location}
          onChange={(e) => setLocation(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Location"
        />
        <TextInput
          value={itemName}
          onChange={(e) => setItemName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Item Name"
        />
        <TextInput
          keyboardType="number-pad"
          value={qty}
          onChange={(e) => setQty(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Quantity"
        />
        <TextInput
          value={price}
          keyboardType="decimal-pad"
          onChange={(e) => setPrice(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Price"
        />
        <TouchableOpacity
          onPress={() => createInvoice()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Create Invoice</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewInvoiceScreen;
