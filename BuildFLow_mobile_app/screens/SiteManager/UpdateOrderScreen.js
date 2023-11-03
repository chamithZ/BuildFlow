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

const UpdateOrderScreen = ({ route, navigation }) => {
  const [orderID, setOrderID] = useState("");
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [delAddress, setDelAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [notes, setNotes] = useState("");

  const [suppliers, setSuppliers] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/order/OrderByID/${route.params.orderID}`
      )
      .then((res) => {
        setOrderID(res.data.OrderID);
        setItemName(res.data.Material);
        setQty(res.data.QTY.toString());
        setDeadline(res.data.Deadline);
        setDelAddress(res.data.DeliveryAddress);
        setDesc(res.data.Description);
        setPrice(res.data.Price.toString());
        setNotes(res.data.note);
        setSelected(res.data.creator);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://backendhostings.herokuapp.com/user/getAllUsers?role=supplier"
      )
      .then((res) => {
        setSuppliers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const createOrder = () => {
    const URL = `https://backendhostings.herokuapp.com/order/UpdateOrderById/${route.params.orderID}`;

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

    axios
      .patch(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Order Updated",
          "Your order has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("AllOrders", {
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

        <TouchableOpacity
          onPress={() => createOrder()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Update Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdateOrderScreen;
