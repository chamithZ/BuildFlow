import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import { Button } from 'react-bootstrap'
import RejectedPdf from '../Common/RejectedPdf';
import SideNavbarSup from '../Auth/SideNavbarSup';

function DisplayRejectOrderList() {
    const [users, setusers] = useState();
    const [serachItem, setserachItem] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(async () => {
        try {
            const data = await (
                await axios.get("http://localhost:5000/order/RejectOrder")
            ).data;
            console.log("all data", data)
            var array = []
            data?.map((users) => {
                if (users?.status === "decline") {
                    array.push(users);
                }
            });
            setusers(array);
            setloading(false);
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    }, []);

    return (
        <>
            <SideNavbarSup />
            <div className="container shadow my-5 mx-auto">
                <h3 className=" fw-bolder py-5"><center><b>Rejected Orders</b></center></h3>

                <div className="row">
                    {loading && <Loader />}
                    <div className="row">
                        <div class="input-group">
                            <div className="col-md-6 mx-auto">
                                <input type="search" class="form-control rounded" placeholder="Search by Order ID" aria-label="Search" onChange={event => { setserachItem(event.target.value) }}
                                    aria-describedby="search-addon" /> <br /> <br />
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                            <Button className='btn btn-danger' onClick={() => RejectedPdf(users)}>Generate Pdf</Button>
                        </div>

                        <table className="table table-bordered" Id="FundsTrans">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Delivery Address</th>
                                    <th scope='col'>Date Created</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View Order</th>
                                </tr>
                            </thead>

                            <tbody id="table-group-divider">
                                {users &&
                                    users.filter((users) => {
                                        if (serachItem == "") {
                                            return users
                                        } else if (users.OrderID.toLowerCase().includes(serachItem.toLowerCase())) {
                                            return users
                                        }
                                    })
                                        .map((users, id) => {
                                            return (
                                                <tr>
                                                    <td>{id + 1}</td>
                                                    <td>{users.OrderID}</td>
                                                    <td>{users.DeliveryAddress}</td>
                                                    <td>{new Date(users.createdAt).toDateString()}</td>
                                                    <td>{users.QTY}</td>
                                                    <td>{users.Price}</td>
                                                    <td><Badge color="danger" style={{ fontSize: "15px" }} disabled> {users.status} </Badge>  </td>
                                                    <td><Link to="">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success"
                                                            onClick={() => window.location.href = `/ViewOrderssById/${users?._id}`}>
                                                            View Order Details
                                                        </button>
                                                    </Link></td>
                                                </tr>
                                            );
                                        })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayRejectOrderList