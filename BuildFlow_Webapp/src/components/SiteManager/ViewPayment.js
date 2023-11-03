import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loader from "../procurementStaff/Loader";
import PaymentPdf from '../Common/PaymentPdf';
import { Button } from 'react-bootstrap'
import SideNavbarSup from '../Auth/SideNavbarSup';

function ViewPayment() {
    const [users, setusers] = useState();
    const [serachItem, setserachItem] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(async () => {
        try {
          const data = await (
            await axios.get("http://localhost:5000/payment/")
          ).data;
          setusers(data);
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
                <h3 className=" fw-bolder py-5"><center><b>All Payment</b></center></h3>
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
                            <Button className='btn btn-danger' onClick={() => PaymentPdf(users)}>Generate Pdf</Button>
                        </div>

                        <table className="table table-bordered" Id="FundsTrans">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Amount</th>
                                    <th scope='col'>Payment Method</th>
                                    <th scope='col'>PhoneNumber</th>
                                </tr>
                            </thead>

                            <tbody id="table-group-divider">
                                {users &&
                                    users.filter((users) => {
                                        if (serachItem == "") {
                                            return users
                                        } else if (users.orderID.toLowerCase().includes(serachItem.toLowerCase())) {
                                            return users
                                        }
                                    })
                                        .map((users, id) => {
                                            return (
                                                <tr>
                                                    <td>{id + 1}</td>
                                                    <td>{users.orderID}</td>
                                                    <td>{users.amount}</td>
                                                    <td>{users.paymentMethod}</td>
                                                    <td>{users.phoneNumber}</td>
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

export default ViewPayment