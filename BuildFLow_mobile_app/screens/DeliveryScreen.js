import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "../styles/common";
import orderStyles from "../styles/orders";

const DeliveryScreen = ({ route, navigation }) => {
  const [deliv, setDelive] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Transport/TansportALL")
      .then((res) => {
        setDelive(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const checkState = (state) => {
    switch (state) {
      case "delivered":
        return orderStyles.ok;
      case "notdelivered":
        return orderStyles.declined;
      default:
        return orderStyles.pending;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/Images/Truck.gif")}
        style={{ height: "34%", width: "100%" }}
      />
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          width: "90%",
        }}
      >
        {deliv.map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
            <Text
              style={{ fontWeight: "600", opacity: 0.6, textAlign: "center" }}
            >
              Order Details
            </Text>
            <View style={orderStyles.items}>
              <View>
                <Text style={{ marginVertical: 2 }}>Order ID</Text>
                <Text style={{ marginVertical: 2 }}>Transport ID</Text>
                <Text style={{ marginVertical: 2 }}>Location</Text>
                <Text style={{ marginVertical: 2 }}>Vehicle Number</Text>
                <Text style={{ marginVertical: 2 }}>Status</Text>
              </View>
              <View>
                <View style={orderStyles.orderID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.OrderID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.TransportID}</Text>
                <Text style={{ marginVertical: 2 }}>{order.location}</Text>
                <Text style={{ marginVertical: 2 }}>{order.VehicleNumber}</Text>
              </View>
            </View>
            <View
              style={checkState(
                order.TransportStatus.toLocaleLowerCase().replace(/\s/g, '')
              )}
            >
              <Text style={orderStyles.status}>{order.TransportStatus}</Text>
            </View>
            {route.params.userRole.toLocaleLowerCase().replace(/\s/g, '') ===
              "sitemanager" && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Payment", {
                    userID: route.params.userID,
                    userRole: route.params.userRole,
                    orderID: order.OrderID,
                  })
                }
                style={commonStyles.button}
              >
                <Text style={{ color: "white" }}>Make Payment</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DeliveryScreen;
