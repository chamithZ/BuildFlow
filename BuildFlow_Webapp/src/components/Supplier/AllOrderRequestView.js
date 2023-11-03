import React, { useState, useEffect } from "react";
import { GetIDoRDER } from "../../Services/SupplierServices";
import { AuthUser } from "../../Services/AuthServices"
import SideNavbarSup from "../Auth/SideNavbarSup";

function AllOrderRequestView() {

  const [users, setusers] = useState();
  const [, setCurrentUser] = useState({});
  const [, setUserRole] = useState(false);
  const [, setLoading] = useState();

  const getAuthUser = async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      let data = await AuthUser(token);
      setUserRole(data?.data?.userRole);
      setCurrentUser(data?.data);
      console.log(data);
      if (data?.data?.userRole === "supplier") {
        GetRequests(data?.data?._id);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const GetRequests = async (id) => {
    try {
      const data = await GetIDoRDER(id);
      console.log("Data", data);
      var arraydata = [];
      data?.data?.map((item) => {
        if (item) {
          arraydata.push(item);
        }
      })
      setusers(arraydata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAuthUser();
  });

  return (
    <div className="py-2">
      <SideNavbarSup />
      <div className="container shadow border py-5 my-5 mx-auto">
        <h3 className=" fw-bolder"><center><b>Supplier Request Orders</b></center></h3>
        <hr />
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Order ID</th>
              <th scope="col">Delivery Address </th>
              <th scope="col">Quantity </th>
              <th scope="col">Price</th>
              <th scope="col">Deadline </th>
              <th scope="col">Material</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users &&
              users.map((users, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{users.OrderID}</td>
                    <td>{users.DeliveryAddress}</td>
                    <td>{users.QTY}</td>
                    <td>LKR: {users.Price} /=</td>
                    <td>{users.Deadline}</td>
                    <td>{users.Material}</td>
                    <td>{users.status === "OK" ? <button onClick={() => window.location.href = `/ViewOrderTransportById/${users?._id}`} className="btn btn-success">Order Approved  </button> : "Pending"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllOrderRequestView;