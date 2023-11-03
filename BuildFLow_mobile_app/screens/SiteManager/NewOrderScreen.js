import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../styles/Colors";
import commonStyles from "../../styles/common";
import newOrderStyles from "../../styles/newOrder";

const NewOrderScreen = ({ route, navigation }) => {

  //form states
  const [orderID, setOrderID] = useState("");
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [deadline, setDeadline] = useState("");
  const [delAddress, setDelAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [notes, setNotes] = useState("");
  const [selected, setSelected] = useState("");

  // array state to store supplier objects
  const [suppliers, setSuppliers] = useState([]);

  // this executes when the page get loaded
  useEffect(() => {

    //network call to get supplier details from the backend
    axios
      .get(
        "http://localhost:3000/user/getAllUsers?role=supplier"
      )
      .then((res) => {
        setSuppliers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const createOrder = () => {
    // backend URL
    const URL = "https://backendhostings.herokuapp.com/order/createOrder";

    // payload for send to backend
    const payload = {
      userId: selected,
      OrderID: orderID,
      Material: itemName,
      QTY: qty,
      Deadline: deadline,
      DeliveryAddress: delAddress,
      Description: desc,
      Price: price,
      note: notes,
    };

    // network call using above data
    axios
      .post(URL, payload)
      .then((_response) => {
        // Alert message for user
        Alert.alert(
          "Order Placed",
          "Your order has been placed successfully!!",
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
    <View style={commonStyles.view}>
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
            marginTop: 12,
          }}
        >
          Select a Supplier
        </Text>

        {/* Horizontal scroll view to select supplier */}
        <ScrollView
          horizontal
          style={{ display: "flex", flexDirection: "row", marginVertical: 12 }}
        >
          {suppliers.map((sup, index) => (
            <TouchableOpacity
              key={`${sup}${index}`}
              onPress={() => setSelected(sup._id)}
              style={
                selected === sup._id
                  ? newOrderStyles.supplierSelected
                  : newOrderStyles.supplier
              }
            >
              <Text
                style={
                  selected === sup._id
                    ? { color: "white" }
                    : { color: Colors.primary }
                }
              >
                {sup.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* checkes if supplier is selected or not */}
        {/* the button will appear only if supplier is selected */}
        {selected !== "" && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllItems", {
                userID: route.params.userID,
                userRole: route.params.userRole,
                supplierID: selected,
              })
            }
            style={commonStyles.button}
          >
            <Text style={{ color: "white" }}>Check Items</Text>
          </TouchableOpacity>
        )}

        {/* order form */}
        <TextInput
          value={orderID}
          onChange={(e) => setOrderID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Order ID"
        />
        <TextInput
          value={itemName}
          onChange={(e) => setItemName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Item Name"
        />
        <TextInput
          value={delAddress}
          onChange={(e) => setDelAddress(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Delivery Address"
        />
        <TextInput
          value={desc}
          onChange={(e) => setDesc(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Description"
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
        <TextInput
          value={deadline}
          onChange={(e) => setDeadline(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Deadline"
        />
        <TextInput
          value={notes}
          onChange={(e) => setNotes(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Notes"
        />

        {/* button to create the order that executes createOrder function */}
        <TouchableOpacity
          onPress={() => createOrder()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Create Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewOrderScreen;
