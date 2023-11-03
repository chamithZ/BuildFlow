import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../styles/Colors";
import orderStyles from "../../styles/orders";
import commonStyles from "../../styles/common";

const AllOrdersScreen = ({ route, navigation }) => {
  const [orders, setOrders] = useState([]);

  const checkState = (state) => {
    switch (state) {
      case "ok":
        return orderStyles.ok;
      case "decline":
        return orderStyles.declined;
      case "pending":
        return orderStyles.pending;
      default:
        return orderStyles.pending;
    }
  };

  const getOrders = () => {
    axios
      .get("http://localhost:3000/order/AllOrderStatus")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  const deleteOrder = (id) => {
    Alert.alert(
      "Are you sure?",
      "This will permanently delete your order!",
      [
        {
          text: "OK",
          onPress: () => {
            axios
              .delete(
                `https://backendhostings.herokuapp.com/order/RemoveOrder/${id}`
              )
              .then((res) => {
                getOrders();
              })
              .catch((e) => {
                console.error(e);
              });
          },
        },
        {
          text: "Cancel",
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {orders.map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
            <Text
              style={{ fontWeight: "600", opacity: 0.6, textAlign: "center" }}
            >
              Order Details
            </Text>
            <View style={orderStyles.items}>
              <View>
                <Text style={{ marginVertical: 2 }}>Order ID</Text>
                <Text style={{ marginVertical: 2 }}>Material</Text>
                <Text style={{ marginVertical: 2 }}>Quantity</Text>
                <Text style={{ marginVertical: 2 }}>Deadline</Text>
              </View>
              <View>
                <View style={orderStyles.orderID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.OrderID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.Material}</Text>
                <Text style={{ marginVertical: 2 }}>{order.QTY}</Text>
                <Text style={{ marginVertical: 2 }}>{order.Deadline}</Text>
              </View>
            </View>
            <View
              style={checkState(
                order.status.toLocaleLowerCase().replace(/\s/g, "")
              )}
            >
              <Text style={orderStyles.status}>{order.status}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("UpdateOrder", {
                    userID: route.params.userID,
                    userRole: route.params.userRole,
                    orderID: order._id,
                  })
                }
                style={{ ...commonStyles.button, width: "30%" }}
              >
                <Text>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteOrder(order._id)}
                style={{ ...commonStyles.button, width: "30%" }}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllOrdersScreen;
