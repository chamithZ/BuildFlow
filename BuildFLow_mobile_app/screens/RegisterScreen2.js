import axios from "axios";
import React, { useState } from "react";
import {
    Alert,
    Button,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import commonStyles from "../styles/common";
import registerStyles from "../styles/register";

const RegisterScreen2 = ({ navigation }) => {
    // states
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [compName, setCompName] = useState("");
    const [supAddress, setSupAddress] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");

    // function to register an user
    const registerUser = () => {
        //backend URL
        const URL = "http://localhost:5000/user/signup";

        //payload for send to backend
        const payload = {
            name: name,
            email: email,
            companyName: compName,
            password: pwd,
            userRole: role,
            supplierAddress: supAddress,
        };

        //network call using above data
        axios
            .post(URL, payload)
            .then((res) => {
                navigation.navigate("Login");
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(
                    "Error",
                    "Registration Unsuccessful",
                    [{ text: "Check Again" }],
                    { cancelable: false }
                );
            });
    };

    return (
        <View style={registerStyles.regPage}>
            <Image
                source={require("../assets/Images/Group1.png")}
                style={{ width: "100%", height: "20%" }}
                resizeMode="contain"
            />

            {/* form for register an user */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                }}
                style={{ width: "80%" }}
            >
                <View style={{ backgroundColor: "white", height: "100%" }}>
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
                    <TextInput
                        secureTextEntry
                        style={commonStyles.textView}
                        onChange={(e) => setCpwd(e.nativeEvent.text)}
                        value={cpwd}
                        placeholder="Confirm Password"
                    />

                    {/* plain text to see if the passwords are matching or not */}
                    {pwd !== cpwd && pwd !== "" && cpwd !== "" ? (
                        <Text style={{ color: "red", textAlign: "center" }}>
                            Passwords are not matching!
                        </Text>
                    ) : (
                        <Text> </Text>
                    )}

                    {/* submit button with registerUser function */}
                    <TouchableOpacity
                        style={commonStyles.button}
                        disabled={pwd !== cpwd}
                        onPress={() => {
                            registerUser();
                        }}
                    >
                        <Text style={commonStyles.buttonText}>Register</Text>
                    </TouchableOpacity>


                    <Text style={{ textAlign: "center" }}>OR</Text>

                    {/* Login button */}
                    <TouchableOpacity
                        style={commonStyles.button}
                        disabled={pwd !== cpwd}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={commonStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default RegisterScreen2;
