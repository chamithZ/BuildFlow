import React, { useState, useEffect } from 'react'
import axios from "axios";
//import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Button } from 'react-bootstrap'
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from 'react-icons/ri'
import SideNavbar from '../Auth/SideNavbar';
import AllSuppliersPdf from '../Common/AllSuppliersPdf';

function AllSuppliers() {

    const [users, setUsers] = useState();

    useEffect(async () => {
        try {
            const data = await (
                await axios.get("http://localhost:5000/user/SupplierUser")).data;
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const deleteSupplier = id => {
        axios.delete(`http://localhost:5000/user/deleteUser/${id}`)
            .then(res => {
                Swal.fire('Congrats', 'Remove Supplier Details Successfully ', 'success')
            })
        setUsers(users.filter(elem => elem._id !== id))
    }

    return (
        <div>
            <div className="">
                <SideNavbar />
                <div className="container shadow my-5 mx-auto"> <br />
                    <h3 className=" fw-bolder mb-4">
                        <center>All Suppliers</center>
                    </h3>

                    <div class="gap-2 py-3">
                        <Button className='btn btn-danger' onClick={() => AllSuppliersPdf(users)}>Generate Pdf</Button> &nbsp;

                        {/* <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="btn btn-danger"
                            table="FundsTrans"
                            filename="AllBooking"
                            sheet="tablexls"
                            buttonText="Export As Excel" /> <br /> <br /> */}
                    </div>

                    <table class="table" Id="FundsTrans">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-mail Address</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Supplier Address</th>
                                <th scope="col">User Role</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                users && users.map((topic, id) => (
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{topic.name}</td>
                                        <td>{topic.email}</td>
                                        <td>{topic.companyName}</td>
                                        <td>{topic.supplierAddress}</td>
                                        <td>{topic.userRole}</td>
                                        <td><button className='btn btn-danger' onClick={() => deleteSupplier(topic._id)}><RiDeleteBin6Fill /></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllSuppliers