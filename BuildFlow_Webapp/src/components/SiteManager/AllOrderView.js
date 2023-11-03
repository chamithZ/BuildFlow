// Inside the component
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { Link as RouterLink } from "react-router-dom";
import { Badge, Box, Button, Container, Input, Text, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, DownloadIcon } from '@chakra-ui/icons';
import SideNavbar from '../Auth/SideNavbar';
import AllOrdersPdf from '../Common/AllOrdersPdf';

function AllOrdersAdmin() {
    const [orders, setOrders] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    // Get all orders
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/order/getAllOrders")
                setOrders(res.data.content);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // Delete order by ID
    const deleteOrder = (id) => {
        axios.delete(`http://localhost:5000/order/RemoveOrder/${id}`)
            .then((res) => {
                Swal.fire('Congrats', 'Remove Order Details Successfully', 'success');
            });
        setOrders(orders.filter((elem) => elem._id !== id));
    };

    // Function to determine the action based on the price
    const determineAction = (price,quantity) => {
        if (price* quantity> 100000) {
            return (
                <Button colorScheme="red">
                    Not Approved Yet
                </Button>
            );
        } else {
            return (
                <Button colorScheme="green">
                    Approve
                </Button>
            );
        }
    };

    return (
        <div>
            <SideNavbar />
            <Container mt="5">
                <Text as="h3" fontWeight="bold" textAlign="center" mb="4">
                    All Orders
                </Text>
                <Box display="flex" justifyContent="center">
                    <Input
                        type="search"
                        placeholder="Search by Order ID"
                        onChange={(event) => setSearchItem(event.target.value)}
                    />
                </Box>
                <Box mt="3">
                    <Button colorScheme="red" leftIcon={<DownloadIcon />} onClick={() => AllOrdersPdf(orders)}>
                        Generate Pdf
                    </Button>
                </Box>
                <Table size="sm" variant="striped" mt="4">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Order ID</Th>
                            <Th>Delivery Address</Th>
                            <Th>Date Created</Th>
                            <Th>Quantity</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                            <Th>Action</Th> {/* New Action Column */}
                            <Th>Edit</Th>
                            <Th>Remove</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders
                            .filter((order) =>
                                searchItem === "" ||
                                order.OrderID.toLowerCase().includes(searchItem.toLowerCase())
                            )
                            .map((order, id) => (
                                <Tr key={order._id}>
                                    <Td>{id + 1}</Td>
                                    <Td>{order.orderId}</Td>
                                    <Td>{order.deliveryAddress}</Td>
                                    <Td>{new Date(order.requiredDate).toDateString()}</Td>
                                    <Td>{order.quantity}</Td>
                                    <Td>LKR: {order.price}</Td>
                                    <Td>
                                        <Badge colorScheme="red" fontSize="15px">
                                            {order.orderStatus}
                                        </Badge>
                                    </Td>
                                    <Td>
                                        <RouterLink to={`/ViewOrderssById/${order._id}`}>
                                            <Button colorScheme="green">
                                                View Order
                                            </Button>
                                        </RouterLink>
                                    </Td>
                                    <Td>
                                        <RouterLink to={`/UpdateOrder/${order._id}`}>
                                            <Button colorScheme="blue" leftIcon={<EditIcon />}>
                                                Edit
                                            </Button>
                                        </RouterLink>
                                    </Td>
                                    <Td> 
                                        <Button colorScheme="red" leftIcon={<DeleteIcon />} onClick={() => deleteOrder(order._id)}>
                                            Remove
                                        </Button>
                                    </Td>
                                    <Td>
                                        {determineAction(order.price,order.quantity)} 
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </Container>
        </div>
    );
}

export default AllOrdersAdmin;
