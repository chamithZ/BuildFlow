import axios from "axios";
import React, { useState } from "react";
import {
    Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../../styles/common";

const NewDelivery = ({ route, navigation }) => {
  const [transportID, setTransportID] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const addDelivery = () => {
    const payload = {
      OrderID: route.params.orderID,
      TransportID: transportID,
      location: location,
      TransportStatus: status,
      VehicleNumber: vehicleNo,
    };

    const URL = "http://localhost:3000/Transport/createTransport"

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Delivery Added!",
          "Your Delivery has been created successfully!!",
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
        <Image style = {{height: "30%", width: "100%"}} resizeMode = "cover" source={require("../../assets/Images/Truck.gif")} />
      <ScrollView style={{ width: "80%", margin: 2 }}>
        <TextInput
          value={transportID}
          onChange={(e) => setTransportID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Transport ID"
        />
        <TextInput
          value={location}
          onChange={(e) => setLocation(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Location"
        />
        <TextInput
          value={status}
          onChange={(e) => setStatus(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Transport Status"
        />
        <TextInput
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Vehicle Number"
        />
        <TouchableOpacity onPress={() => addDelivery()} style={commonStyles.button}>
          <Text style={{ color: "white" }}>Add Delivery</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewDelivery;
