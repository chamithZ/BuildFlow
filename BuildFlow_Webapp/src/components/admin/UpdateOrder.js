import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import SideNavbar from '../Auth/SideNavbar';
import Swal from "sweetalert2";

function UpdateOrder() {
    const navigate = useNavigate();
    const [OrderID, setOrderID] = useState("");
    const [DeliveryAddress, setDeliveryAddress] = useState("");
    const [QTY, setQTY] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const [status, setstatus] = useState("");
    const [Deadline, setDeadline] = useState("");
    const [Material, setMaterial] = useState("");

    const { id } = useParams("");
    console.log(id);

    function sendUpdateOrder(e) {
        e.preventDefault();
        const updatedOrder = {
            orderId: OrderID,
            deliveryAddress: DeliveryAddress,
            quantity: QTY,
            price: Price,
            description: Description,
            orderStatus: status,
            requiredDate: Deadline,
            supplier: Material,
        };

        axios.put(` http://localhost:8080/api/order/updateOrder`, updatedOrder)
            .then(res => {
                console.log(res.data.content);
                Swal.fire("Success", "Order Updated Successfully", "success");
                navigate("/AllOrders");
            }).catch((err) => {
                alert(err);
                console.error(err);
            });
    }

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/order/getOrder/${id}`);
                const orderData = res.data.content; // Assuming the order data is in the content field

                setOrderID(orderData.orderId);
                setDeliveryAddress(orderData.deliveryAddress);
                setQTY(orderData.quantity);
                setPrice(orderData.price);
                setDescription(orderData.description);
                setstatus(orderData.orderStatus);
                setDeadline(orderData.requiredDate);
                setMaterial(orderData.supplier);

                console.log(res.data.content);
            } catch (err) {
                console.log(err);
            }
        };
        getdata();
    }, [id]);

    return (
        <div>
            <SideNavbar />
            <div className="container shadow my-5 mx-auto w-50">
                <h3 className="fw-bolder mb-4">
                    <center>Update Order Details</center>
                </h3>
                <hr />
                <form onSubmit={sendUpdateOrder}>
                    <div className="row py-3">
                        <div className="col-md-4">
                            <label htmlFor="name">Order ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Order ID"
                                value={OrderID}
                                onChange={(e) => setOrderID(e.target.value)}
                                readOnly
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="email">Material</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Material Name"
                                value={Material}
                                onChange={(e) => setMaterial(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="contact">Deadline</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                placeholder="Enter Deadline"
                                value={Deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row py-3">
                        <div className="col-md-4">
                            <label htmlFor="contact">Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                placeholder="Enter Quantity"
                                value={QTY}
                                onChange={(e) => setQTY(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="contact">Price (LKR)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                placeholder="Enter Price"
                                value={Price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="contact">Order Status</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                placeholder="Enter Order Status"
                                value={status}
                                onChange={(e) => setstatus(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row py-3">
                        <div className="col-md-6">
                            <label htmlFor="id">Delivery Address</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="id"
                                placeholder="Delivery Address"
                                value={DeliveryAddress}
                                onChange={(e) => setDeliveryAddress(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="contact">Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="contact"
                                placeholder="Description"
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='py-3'>
                        <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">Update Order</button> <br />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateOrder;
