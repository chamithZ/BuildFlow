import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { LoginSupplier } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import "./ClientLogin.css";

const Login = () => {
    const navigate = useNavigate(); // Define the navigate function

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = await LoginSupplier(formData);
        if (data.data.token) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userRole", data.data.userRole);
            localStorage.setItem("user", data.data.user);
            localStorage.setItem("userId", data.data.userId);
            Swal.fire(
                "Congrats",
                "Successfully Login to your Account",
                "success"
            );
            navigate("/Profile");
        } else {
            Swal.fire("error", "Try Again!", "error");
            navigate("/Profile");
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to enjoy all of our cool{" "}
                        <Text color={"blue.400"}>features</Text> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <form onSubmit={onSubmit}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    minLength="6"
                                    value={password}
                                    onChange={onChange}
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Text color={"blue.400"}>
                                        Forgot password?
                                    </Text>
                                </Stack>
                                <Button
                                    type="submit"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Login;
