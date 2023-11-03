import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DisplayAllOrders = () => {
  const [serachItem, setserachItem] = useState([]);
  const [Order, setusers] = useState();
  const [, setloading] = useState(true);

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/order/AllOrderStatus/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

  const removeOrder = id => {
    axios.delete(`http://localhost:5000/order/RemoveOrder/${id}`)
      .then(res => {
        Swal.fire('Congrats', 'Remove Order Successfully', 'success')
      })
    setusers(Order.filter(elem => elem._id !== id))
  }

  return (
    <div className="container shadow border my-5 py-5 mx-auto">
      <h3 className=" fw-bolder mb-4"><center>All Orders</center></h3>
      <div className="row">
        <div class="input-group">
          <div className="col-md-6 mx-auto">
            <input type="search" class="form-control" placeholder="Search by Order ID" aria-label="Search" onChange={event => { setserachItem(event.target.value) }}
              aria-describedby="search-addon" /> <br /> <br />
          </div>
        </div>

        <table class="table">
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Order ID</th>
              <th scope='col'>Delivery Address</th>
              <th scope='col'>Material</th>
              <th scope='col'>Deadline</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Total Amount</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {Order &&
              Order.filter((users) => {
                if (serachItem === "") {
                  return users
                } else if (users.OrderID.toLowerCase().includes(serachItem.toLowerCase())) {
                  return users
                }
              }).map((user) => {
                return (
                  <tr>
                    <td> {user.OrderID} </td>
                    <td> {user.DeliveryAddress} </td>
                    <td> {user.Material} </td>
                    <td> {user.Deadline} </td>
                    <td> {user.QTY} </td>
                    <td> LKR: {user.Price} /=</td>
                    <td>
                      <h5><button onClick={() => removeOrder(user._id)} type="submit" class="btn btn-danger">Remove Order</button></h5>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DisplayAllOrders;