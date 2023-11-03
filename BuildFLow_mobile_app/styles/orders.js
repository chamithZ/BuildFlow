import { StyleSheet } from "react-native";
import Colors from "./Colors";

const orderStyles = StyleSheet.create({
  orderCard: {
    backgroundColor: Colors.inputBG,
    marginVertical: 8,
    padding: 10,
    borderRadius: 12
  },
  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6
  },
  orderID: {
    marginVertical: 2,
    color: "white",
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 4,
  },
  status: {
    marginVertical: 2,
    color: "white",
    textAlign: "center"
  },
  ok: {
    backgroundColor: "#196e02",
    borderRadius: 12
  },
  declined: {
    backgroundColor: "#820101",
    borderRadius: 12
  },
  pending: {
    backgroundColor: "#997603",
    borderRadius: 12
  }
});

export default orderStyles;
