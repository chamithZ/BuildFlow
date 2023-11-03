import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import commonStyles from "../../styles/common";

const AddItems = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/user/getUserById/${route.params.userID}`
      )
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const addItem = () => {
    const URL = `https://backendhostings.herokuapp.com/user/updateUserById/${route.params.userID}`;

    const payload = {
      items: [...items, { name: name, price: price }],
    };

    axios
      .patch(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Item Added!",
          "Your Item has added successfully!!",
          [
            {
              text: "OK",
              onPress: () => {
                setName("");
                setPrice("");
              },
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
    <View style = {{width: "100%"}}>
      <TextInput
        value={name}
        placeholder="Item Name"
        onChange={(e) => setName(e.nativeEvent.text)}
        style={commonStyles.textView}
      />
      <TextInput
        value={price}
        keyboardType="number-pad"
        placeholder="Item Price"
        onChange={(e) => setPrice(e.nativeEvent.text)}
        style={commonStyles.textView}
      />

      <TouchableOpacity onPress = {() => addItem()} style = {{...commonStyles.button, marginHorizontal: 100}}>
        <Text style = {{color: "white"}}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItems;
