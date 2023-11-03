import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import SideNavbar from '../Auth/SideNavbar';
import Swal from "sweetalert2";
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [orderID, setorderID] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const changeOnClick = (f) => {
    const payment = {
      orderID,
      amount,
      paymentMethod,
      phoneNumber
    };

    try {
      axios.post("http://localhost:5000/payment/", payment);
      Swal.fire("Congrats", "Payment successfull", "success")
      navigate("/DisplayApprovedOrderAdmin");
    } catch (err) {
      Swal.fire("error", "Error", "error")
    }
  }

  const { id, Price } = useParams();

  useEffect(() => {
    console.log(id);
  })

  async function handleToken(token) {
    console.log(token);

    let result;

    if (result === 200) {
      Swal.fire({
        icon: "success",
        title: "Congrats...",
        text: "Payment Sucessfully",
      });

    } else {
      Swal.fire({
        icon: "success",
        title: "Congrats...",
        text: "Payment Sucessfully",
      });

    }
  }


  return (
    <div>
      <SideNavbar />
      <div className="container shadow my-5 py-3">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center order">
            <img src='https://img.freepik.com/premium-vector/tiny-characters-huge-transaction-history-payment-recipe-man-buyer-holding-credit-card-online-payment-woman-with-glass-cashless-paying-shopping-store-cartoon-people-vector-illustration_87771-11353.jpg?w=2000' alt="logo" style={{ width: '100%', height: '90%' }} />
          </div>
          <div className="col-md-7 p-5">
            <h2 className="fw-bolder mb-2 py-3"><center>Payment</center></h2>
            <hr />
            <form onSubmit={changeOnClick}>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="gid" class="form-label">Order ID - </label> &nbsp;<b>{id}</b>
                  <input name="orderID" onChange={(f) => setorderID(f.target.value)} type="text" class="form-control" id="gid" placeholder='Enter Order ID' required />
                </div>
                <div class="col-md-6">
                  <label for="name" class="form-label">Payment Amount - </label> &nbsp;<b>LKR: {Price} /=</b>
                  <input name="amount" onChange={(f) => setAmount(f.target.value)} type="number" class="form-control" placeholder='Enter Payment Amount' required />
                </div>
              </div>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="name" class="form-label">Payment Method</label>
                  <input name="paymentMethod" onChange={(f) => setPaymentMethod(f.target.value)} type="text" class="form-control" placeholder='Enter Payment Method' required />
                </div>
                <div class="col-md-6">
                  <label for="name" class="form-label">Phone Number</label>
                  <input name="phoneNumber" onChange={(f) => setPhoneNumber(f.target.value)} type="number" class="form-control" placeholder='Enter Phone Number' required />
                </div>
              </div> <br />
              <br />
            </form>
            <StripeCheckout
              stripeKey="pk_test_51Lr1EmF53OEZBtIfnDtu50k4oS98pyE6AfE0grktJfgVawhf7fEMAIbuSnQLCjXTDqC9PHNoJa2JkuJuZUeCI26300PQrA3w3S"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={amount * 100}
              currency='LKR'>
              <button
                type="submit" class="btn btn-danger w-100 rounded-pill">Pay Now</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment