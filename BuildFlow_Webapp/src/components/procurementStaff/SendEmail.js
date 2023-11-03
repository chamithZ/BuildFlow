import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthUser } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { OrderByID } from "../../Services/SupplierServices";
import SideNavbar from '../Auth/SideNavbar';

const SendEmail = (props) => {

    const { id } = useParams("");

    const [email, setUserEmail] = useState("");

    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const details = async () => {
        let token = localStorage.getItem('token');
        let data = await AuthUser(token);
        console.log("current User", data?.data);
        setUserEmail(data?.data?.email);
    }

    useEffect(() => {
        details();
    }, [])


    const [OrderID, setOrderID] = useState("");
    const [status, setstatus] = useState("");

    const GetTopicData = async () => {
        let data = await OrderByID(id);
        console.log("Update topics", data);
        setOrderID(data?.data?.OrderID);
        setstatus(data?.data?.status);
    };

    useEffect(() => {
        GetTopicData();
    });

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            "service_24jbmdk",
            "template_mwvhicz",
            e.target,
            "l5NUKPpbvRhbN3ZLl"
        ).then(res => {
            Swal.fire("Congrats", "Successfully Send Email", "success")
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <SideNavbar />
            <div className="container shadow my-5 mx-auto w-50">
                <div className="col p-5 mx-auto">
                    <h3 className=" fw-bolder mb-5"><center>Send Status</center></h3>
                    <form onSubmit={sendEmail}>
                        <div class="mb-3">
                            <label for="name" class="form-label">E-mail - </label>
                            &nbsp;<b><span className="" onChange={handleUserEmail} readOnly>{email}</span></b>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Order ID</label>
                            <input name="lead_no" value={OrderID} type="text" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for="interest" class="form-label">Order Status</label>
                            <input name="status_sup" value={status} type="text" class="form-control" id="interest" required />
                        </div>
                        <br />
                        <button type="submit" value="Send" class="btn btn-success w-100 rounded-pill"> Send E-mail </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendEmail;