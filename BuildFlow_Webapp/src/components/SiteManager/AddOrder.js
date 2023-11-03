import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterSupplier } from "../../Services/AuthServices";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import Swal from "sweetalert2";
import SideNavbar from "../Auth/SideNavbar";
import axios from "axios";

const AddOrder = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            // Set the orderStatus to true in the values object
            // Calculate the total price
        const totalPrice = values.price * values.quantity;

        // Set the orderStatus to false if the total price is greater than 100,000
        if (totalPrice > 100000) {
            values.orderStatus = false;
        } else {
            values.orderStatus = true;
        }
    
            const response = await axios.post("http://localhost:8080/api/order/addOrder", values);
            console.log(response.data)
    
            if (response.data.message=="Success") {
                Swal.fire(
                    "Congrats",
                    "Successfully created your order",
                    "success"
                );
                navigate("/");
            } else {
                Swal.fire("Error", "Failed to register", "error");
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire("Error", "Failed to register", "error");
        }
    };
    

    const validate = (values) => {
        const errors = {};

        if (!values.supplier) {
            errors.supplier = "Supplier Required";
        }

        if (!values.deliveryAddress) {
            errors.deliveryAddress = " Delivery address Required";
        }

        if (!values.requiredDate) {
            errors.requiredDate = "Date Required";
        }

        if (!values.quantity) {
            errors.quantity = " Quantity Required";
        }

        if (!values.description) {
            errors.description = "Description Required";
        }

        if (!values.orderStatus) {
            errors.orderStatus = "Order statusRequired";
        }

        if (!values.price) {
            errors.price = "Price Required";
        }

        return errors;
    };

    return (
        <div>
            <SideNavbar />
            <div className="container shadow my-4">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center order">
                        <img
                            src="https://st3.depositphotos.com/1001599/14457/v/450/depositphotos_144576913-stock-illustration-warehouse-worker-scanning-barcode-on.jpg"
                            alt="logo"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="col-md-7 p-5">
                        <h2 className="fw-bolder mb-2 py-3">
                            <center>Add New Order</center>
                        </h2>
                        <Formik
                            initialValues={{
                                supplier: "",
                                deliveryAddress: "",
                                requiredDate: "",
                                quantity: "",
                                description: "",
                                orderStatus: "",
                                price: "",
                            }}
                            validate={validate}
                            onSubmit={handleSubmit}
                        >
                            <Form className="form">
                                <Field name="supplier">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.supplier &&
                                                form.touched.supplier
                                            }
                                        >
                                            <FormLabel htmlFor="supplier">
                                                Supplier
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="supplier"
                                                placeholder="Enter Supplier"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.supplier}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="deliveryAddress">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.deliveryAddress &&
                                                form.touched.deliveryAddress
                                            }
                                        >
                                            <FormLabel htmlFor="deliveryAddress">
                                                Delivery Address
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="deliveryAddress"
                                                placeholder="Enter Delivery Address"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.deliveryAddress}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="requiredDate">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.requiredDate &&
                                                form.touched.requiredDate
                                            }
                                        >
                                            <FormLabel htmlFor="requiredDate">
                                                Required Date
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="requiredDate"
                                                placeholder="Enter Required Date"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.requiredDate}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="quantity">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.quantity &&
                                                form.touched.quantity
                                            }
                                        >
                                            <FormLabel htmlFor="quantity">
                                                Quantity
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="quantity"
                                                placeholder="Enter Quantity"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.quantity}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="description">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.description &&
                                                form.touched.description
                                            }
                                        >
                                            <FormLabel htmlFor="description">
                                                Description
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="description"
                                                placeholder="Enter Description"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.description}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="orderStatus">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.orderStatus &&
                                                form.touched.orderStatus
                                            }
                                        >
                                            <FormLabel htmlFor="orderStatus">
                                                Order Status
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="orderStatus"
                                                placeholder="Enter Order Status"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.orderStatus}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="price">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.price &&
                                                form.touched.price
                                            }
                                        >
                                            <FormLabel htmlFor="price">
                                                Price
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="price"
                                                placeholder="Enter Price"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.price}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <br />

                                <Button
                                    type="submit"
                                    className="btn btn-primary w-100 mt-4 rounded-pill"
                                >
                                    Add Order
                                </Button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;