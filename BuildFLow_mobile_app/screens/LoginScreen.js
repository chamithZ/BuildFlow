import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";
import loginStyles from "../styles/login";

const LoginScreen = ({ navigation }) => {
  // Hardcoded login details for testing
  const hardcodedEmail = "test@example.com";
  const hardcodedPassword = "password123";

  // States
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // Function to log a user in
  const loginUser = () => {
    // Check if the entered email and password match the hardcoded values
    if (email === hardcodedEmail && pwd === hardcodedPassword) {
      // Navigate to the Dashboard with hardcoded user details
      navigation.navigate("Dashboard", {
        userID: "12345", // Replace with your hardcoded user ID
        userRole: "sitemanager", // Replace with the user role you want to test
      });
    } else {
      // Display an error message for incorrect login details
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <View style={loginStyles.logPage}>
      <Image
        source={require("../assets/Images/Sign_up.png")}
        style={{ width: "50%", height: "40%" }}
        resizeMode="contain"
      />
      {/* Login form */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          marginTop: 5,
        }}
        style={{ width: "80%" }}
      >
        <View  style={{ backgroundColor: "white", height: "100%" }}>
          <TextInput
            keyboardType="email-address"
            style={commonStyles.textView}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email}
            placeholder="E-mail Address"
          />
          <TextInput
            secureTextEntry
            style={commonStyles.textView}
            onChange={(e) => setPwd(e.nativeEvent.text)}
            value={pwd}
            placeholder="Password"
          />

          {/* Submit button with loginUser function */}
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => {
              loginUser();
            }}
          >
            <Text style={commonStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center" }}>Don't have an account?
                    <Text style={{ textAlign: "center", fontWeight:'bold', marginTop: 10, color: "orange" ,cursor:'pointer'}} onPress={() => navigation.navigate("Register")}> Register</Text>
                    </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
