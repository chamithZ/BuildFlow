import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import SideNavbarSite from '../Auth/SideNavbarSite';
import AllOrdersPdf from '../Common/AllOrdersPdf';

function AllOrdersSite() {
    const [users, setUsers] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get('http://localhost:8080/api/order/getAllOrders');
                setUsers(res.data.content);
            } catch (err) {
                console.error(err);
            }
        };
        getUsers();
    }, []);

    const handleRemoveOrder = async (orderId) => {
        if (window.confirm('Are you sure you want to remove this order?')) {
            try {
                // Send a request to cancel the order using your API
                const response = await axios.delete(`http://localhost:8080/api/order/cancelOrder/${orderId}`);

                if (response.status === 200) {
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
                <SideNavbarSite />
                <div className="container shadow my-5 mx-auto">
                    <br />
                    <h3 className="fw-bolder mb-4">
                        <center>All Orders</center>
                    </h3>
                    <div className="row">
                        <div class="input-group">
                            <div className="col-md-6 mx-auto">
                                <input
                                    type="search"
                                    class="form-control rounded"
                                    placeholder="Search by Order ID"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearchItem(event.target.value);
                                    }}
                                    aria-describedby="search-addon"
                                />
                                <br />
                                <br />
                            </div>
                        </div>
                        <table className="table table-bordered mb-3" Id="FundsTrans">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Delivery Address</th>
                                    <th scope="col">Date Created</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody id="table-group-divider">
                                {users
                                    .filter((user) => {
                                        if (searchItem === '') {
                                            return true;
                                        }
                                        return user.orderId.toLowerCase().includes(searchItem.toLowerCase());
                                    })
                                    .map((user, id) => (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{user.orderId}</td>
                                            <td>{user.deliveryAddress}</td>
                                            <td>{new Date(user.requiredDate).toDateString()}</td>
                                            <td>{user.quantity}</td>
                                            <td>LKR: {user.price}</td>
                                            <td>
                                                <Badge color="danger" style={{ fontSize: '15px' }} disabled>
                                                    {user.status}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Link to={`/ViewOrderssById/${user.orderId}`}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                    >
                                                        View Order
                                                    </button>
                                                </Link>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => handleRemoveOrder(user.orderId)}
                                                >
                                                    Cancel Order
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllOrdersSite;
