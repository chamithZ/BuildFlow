import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Colors from "../../styles/Colors";

const ViewPayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/payment")
      .then((res) => {
        setPayments(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <View style = {{backgroundColor: Colors.inputBG, margin: 10, borderRadius: 12, flexDirection: "row", paddingVertical: 12, justifyContent: "space-around"}}>
      <View style = {{flexDirection: "column"}}>
        <Text style = {{fontSize: 16, fontWeight: "300"}}>OrderID</Text>
        <Text style = {{fontSize: 16, fontWeight: "300"}}>Amount</Text>
        <Text style = {{fontSize: 16, fontWeight: "300"}}>Payment Method</Text>
      </View>
      <View style = {{flexDirection: "column"}}>
        <Text style = {{fontSize: 16, fontWeight: "300"}}>:</Text>
        <Text style = {{fontSize: 16, fontWeight: "300"}}>:</Text>
        <Text style = {{fontSize: 16, fontWeight: "300"}}>:</Text>
      </View>
      {payments.map((pay) => (
        <View style = {{flexDirection: "column"}}>
          <Text style = {{fontSize: 16, fontWeight: "600"}}>{pay.orderID}</Text>
          <Text style = {{fontSize: 16, fontWeight: "600"}}>{pay.amount} LKR</Text>
          <Text style = {{fontSize: 16, fontWeight: "600"}}>{pay.paymentMethod}</Text>
        </View>
      ))}
    </View>
  );
};

export default ViewPayment;
