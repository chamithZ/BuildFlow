import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { RegisterSupplier } from '../../Services/AuthServices';
import Swal from "sweetalert2";
import '../Auth/ClientLogin.css'
import SideNavbar from '../Auth/SideNavbar';

const AddSupplier = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [supplierAddress, setsupplierAddress] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlesetsupplierAddress = (e) => {
        setsupplierAddress(e.target.value);
    };

    const handlecompanyname = (e) => {
        setcompanyName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
                Swal.fire('error', 'Fill The All Data ', 'error')
                navigate("/register");
        } else {
            let newdata = {
                name: name,
                email: email,
                supplierAddress: supplierAddress,
                companyName: companyName,
                password: password,
            }
            let studentdata = await RegisterSupplier(newdata);
            console.log("return data", studentdata);
            localStorage.setItem("token", studentdata.data.token);
            localStorage.setItem("userRole", studentdata.data.userRole);
                Swal.fire('Congrats', 'Successfully create Your Account ', 'success')
                navigate("/");
        }
    };

    return (
        <div>
            <SideNavbar />
            <div className="container shadow my-4">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center order">
                        <img src='https://thumbs.dreamstime.com/b/moving-supplier-who-counts-cardboard-box-88561026.jpg' alt="logo" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="col-md-7 p-5">
                        <h2 className="fw-bolder mb-2 py-3"><center>Add New Supplier</center></h2>
                        <form className="form">
                            <div className='row py-3'>
                                <div class="col-md-6">
                                    <label for="name">Full Name</label>
                                    <input type="text"
                                        name="name"
                                        onChange={handleName} value={name}
                                        className="form-control"
                                        placeholder="Enter Your Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="name">Supplier Address</label>
                                    <input type="text"
                                        name="supplierAddress"
                                        onChange={handlesetsupplierAddress} value={supplierAddress}
                                        className="form-control"
                                        placeholder="Enter Supplier Address" />
                                </div>
                            </div>
                            <div className='row py-3'>
                                <div class="col-md-6">
                                    <label for="name">Company Name</label>
                                    <input type="text"
                                        name="companyName"
                                        onChange={handlecompanyname} value={companyName}
                                        className="form-control"
                                        placeholder="Enter Company Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="name">E-mail Address</label>
                                    <input type="email"
                                        name="email"
                                        onChange={handleEmail} value={email}
                                        className="form-control"
                                        placeholder="Enter Your E-mail" />
                                </div>
                            </div>
                            <div className='row py-3'>
                                <div class="col-md-12">
                                    <label for="name">Password</label>
                                    <input type="password"
                                        name="password"
                                        onChange={handlePassword} value={password}
                                        className="form-control"
                                        placeholder="Enter Your Password" />
                                </div>
                            </div>
                            <button type="submit" onClick={handleSubmit} class="btn btn-primary w-100 mt-4 rounded-pill">Register Supplier</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSupplier;