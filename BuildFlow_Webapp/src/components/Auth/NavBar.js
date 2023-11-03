import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading, Spacer, HStack } from "@chakra-ui/react";
import Login from "../images/Buildflow.jpg";

const NavBarChakra = () => {
    const navigate = useNavigate();
    let userRole = localStorage.getItem("userRole");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding={4}
            backgroundColor="white"
            boxShadow="sm"
        >
            <RouterLink to="/">
                <Box style={{height:60}}>
                    <img src={Login} alt="Logo" style={{height: 60}} />
                </Box>
            </RouterLink>
            <HStack spacing={4}>
                {userRole === "admin" && (
                    <Button
                        as={RouterLink}
                        to="/DashboardAdmin"
                        colorScheme="blue"
                    >
                        Admin Dashboard
                    </Button>
                )}
                {userRole === "supplier" && (
                    <Button
                        as={RouterLink}
                        to="/DashboardSupply"
                        colorScheme="blue"
                    >
                        Supplier Dashboard
                    </Button>
                )}
                {userRole === "siteManager" && (
                    <Button as={RouterLink} to="/Dashboard" colorScheme="blue">
                        Site Manager Dashboard
                    </Button>
                )}
            </HStack>
            {userRole && (
                <Button
                    colorScheme="gray"
                    variant="outline"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            )}
        </Flex>
    );
};

export default NavBarChakra;
