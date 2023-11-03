import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Colors from "../../styles/Colors";

const AllItemsScreen = ({ navigation, route }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/user/getUserById/${route.params.supplierID}`
      )
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((e) => {
        console.error(e);
      });
  });

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Price List
      </Text>

      {items.length !== 0 ? (
        <View
          style={{
            backgroundColor: Colors.inputBG,
            marginHorizontal: 16,
            borderRadius: 16,
            paddingVertical: 8,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ fontWeight: "300", marginBottom: 6 }}>Item</Text>
            <Text style={{ fontWeight: "300", marginBottom: 6 }}>Price</Text>
          </View>
          {items.map((item, index) => (
            <View
              key={item + index}
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text
                style={{ fontWeight: "500", marginVertical: 4, fontSize: 16 }}
              >
                {item.name}
              </Text>
              <Text
                style={{ fontWeight: "500", marginVertical: 4, fontSize: 16 }}
              >
                {item.price} LKR
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            marginVertical: 10,
            backgroundColor: Colors.inputBG,
            padding: 12,
            borderRadius: 12,
            marginHorizontal: 24,
          }}
        >
          No Items To Display
        </Text>
      )}
    </View>
  );
};

export default AllItemsScreen;
