import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import SideNavbar from '../Auth/SideNavbar';

const CreateDeliveryNote = () => {
    const [PurchaseID, setPurchaseID] = useState("");
    const [orderID, setorderID] = useState("");
    const [TransportID, setTransportID] = useState("");
    const [Date, setDate] = useState();
    const [TotalAmount, setTotalAmount] = useState("");

    const navigate = useNavigate();

    const changeOnClick = (f) => {
        const notes = {
            PurchaseID,
            orderID,
            TransportID,
            Date,
            TotalAmount
        };

        try {
            axios.post("http://localhost:5000/note/", notes);
            Swal.fire("Congrats", "Send Delivery Note Sucessfully", "success")
            navigate("/AllOrderRequestView");
        } catch (err) {
            Swal.fire("error", "Error", "error")
        }
    }

    const { OrderID, transportID } = useParams();

    useEffect(() => {
        console.log(transportID);
    })

    return (
        <>
            <SideNavbar />
            <div class="container shadow my-5 py-5 mx-auto w-50">
                <h3 className=" fw-bolder"><center><b>Delivery Note</b></center></h3>
                <hr />
                <form onSubmit={changeOnClick}>
                    <div className='row py-3'>
                        <div class="col-md-4">
                            <label for="gid" class="form-label">Purchase ID</label>
                            <input name="PurchaseID" onChange={(f) => setPurchaseID(f.target.value)} type="text" class="form-control" id="gid" placeholder='Enter Purchase ID' required />
                        </div>
                        <div class="col-md-4">
                            <label for="name" class="form-label">Order ID - </label>&nbsp;<b>{OrderID}</b>
                            <input name="orderID" onChange={(f) => setorderID(f.target.value)} type="text" class="form-control" placeholder='Enter Transport ID' required />
                        </div>
                        <div class="col-md-4">
                            <label for="name" class="form-label">Transport ID - </label>&nbsp;<b>{transportID}</b>
                            <input name="TransportID" onChange={(f) => setTransportID(f.target.value)} type="text" class="form-control" placeholder='Enter Transport ID' required />
                        </div>
                    </div>
                    <div className='row py-3'>
                        <div class="col-md-6">
                            <label for="name" class="form-label">Date</label>
                            <input name="Date" onChange={(f) => setDate(f.target.value)} type="date" class="form-control" placeholder='Enter Date' required />
                        </div>
                        <div class="col-md-6">
                            <label for="name" class="form-label">Total Amount</label>
                            <input name="TotalAmount" onChange={(f) => setTotalAmount(f.target.value)} type="number" class="form-control" placeholder='Enter Total Amount' required />
                        </div>
                    </div> <br /> <br />
                    <button type="submit" class="btn btn-danger w-100 rounded-pill">Create Delivery Note</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default CreateDeliveryNote