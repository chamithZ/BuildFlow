import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import SideNavbarSup from '../Auth/SideNavbarSup';
import AllOrdersPdf from '../Common/AllOrdersPdf';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function AllOrders() {
    const [users, setUsers] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const getAllOrders = () => {
            axios.get("http://localhost:8080/api/order/getAllOrders")
                .then((res) => {
                    console.log(res.data.content)
                    setUsers(res.data.content);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        getAllOrders();
    }, []);

    


    const handleUpdateOrder = (orderId) => {
        // Use the `navigate` function to direct the user to the "Update Order" page
        navigate(`/UpdateOrder/${orderId}`);
    };
    
    const handleRemoveOrder = async (orderId) => {
        if (window.confirm('Are you sure you want to remove this order?')) {
            try {
                // Send a request to cancel the order using your API
                const response = await axios.delete(`http://localhost:8080/api/order/cancelOrder/${orderId}`);
                console.log(response.data);
                if (response.data.message === "Success") {
                    // Optionally, refresh the order list after cancellation
                    const res = await axios.get('http://localhost:8080/api/order/getAllOrders');
                    setUsers(res.data.content);
                    Swal.fire('Success', 'Order canceled successfully', 'success');
                } else {
                    Swal.fire('Error', 'Failed to cancel the order', 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to cancel the order', 'error');
            }
        }
    };

    return (
        <div>
            <div className="">
                <SideNavbarSup />
                <div className="container shadow my-5 mx-auto">
                    <br />
                    <h3 className="fw-bolder mb-4">
                        <center>All Orders</center>
                    </h3>
                    <div className="row">
                        <div className="input-group">
                            <div className="col-md-6 mx-auto">
                                <input
                                    type="search"
                                    className="form-control rounded"
                                    placeholder="Search by Order ID"
                                    aria-label="Search"
                                    onChange={event => { setSearchItem(event.target.value) }}
                                    aria-describedby="search-addon"
                                />
                                <br /><br />
                            </div>
                        </div>
                        <div className="gap-2 py-3">
                            <button className='btn btn-danger' onClick={() => AllOrdersPdf(users)}>
                                Generate Pdf
                            </button>
                            <br /><br />
                        </div>

                        <table className="table table-bordered mb-3" id="FundsTrans">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Supplier</th>
                                    <th scope="col">Delivery Address</th>
                                    <th scope="col">Ordered Date</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">OrderStatus</th>
                                    <th scope="col">View</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Cancel</th>
                                </tr>
                            </thead>

                            <tbody id="table-group-divider">
                                {users &&
                                    users.filter((user) => {
                                        if (searchItem === "") {
                                            return user;
                                        } else if (user.OrderID.toLowerCase().includes(searchItem.toLowerCase())) {
                                            return user;
                                        }
                                    }).map((user, id) => {
                                        return (
                                            <tr key={id}>
                                                <td>{id + 1}</td>
                                                <td>{user.supplier}</td>
                                                <td>{user.deliveryAddress}</td>
                                                <td>{new Date(user.requiredDate).toDateString()}</td>
                                                <td>{user.quantity}</td>
                                                <td>LKR: {user.price}</td>
                                                <td>LKR: {user.description}</td>
                                                <td>
                                                <Badge color="danger" style={{ fontSize: "15px" }} disabled>
    {user.orderStatus == "true" ? "Accepted" : "Pending"}
</Badge>

</td>

                                                <td>
                                                    <Link to={`/ViewOrderssById/${user?.orderId}`}>
                                                        <button type="submit" className="btn btn-success">
                                                            View Order
                                                        </button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" onClick={() => handleUpdateOrder(user.orderId)}>
                                                        Update
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-danger" onClick={() => handleRemoveOrder(user.orderId)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllOrders;
