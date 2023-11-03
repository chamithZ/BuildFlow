import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import Swal from "sweetalert2";
import SideNavbar from "../Auth/SideNavbar";
import axios from "axios";

const UpdateOrder = ({ orderData }) => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            // Modify the logic to update an existing order
            const response = await axios.put(`http://localhost:8080/api/order/updateOrder/${orderData.orderId}`, values);
            console.log(response.data);

            if (response.data.message === "Success") {
                Swal.fire(
                    "Congrats",
                    "Successfully updated the order",
                    "success"
                );
                navigate("/");
            } else {
                Swal.fire("Error", "Failed to update", "error");
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire("Error", "Failed to update", "error");
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.supplier) {
            errors.supplier = "Required";
        }

        if (!values.deliveryAddress) {
            errors.deliveryAddress = "Required";
        }

        if (!values.requiredDate) {
            errors.requiredDate = "Required";
        }

        if (!values.quantity) {
            errors.quantity = "Required";
        }

        if (!values.description) {
            errors.description = "Required";
        }

        if (!values.orderStatus) {
            errors.orderStatus = "Required";
        }

        if (!values.price) {
            errors.price = "Required";
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
                            <center>Update Order</center>
                        </h2>
                        <Formik
                            initialValues={orderData} // Prepopulate with existing order data
                            validate={validate}
                            onSubmit={handleSubmit}
                        >
                           
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrder;
