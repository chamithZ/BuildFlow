import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { OrderByID } from "../../Services/SupplierServices";
import axios from "axios";
import SideNavbarSite from "../Auth/SideNavbarSite";

const TransportOrderSup = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [OrderID, setOrderID] = useState("");
  const [DeliveryAddress, setDeliveryAddress] = useState("");
  const [QTY, setQTY] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setstatus] = useState("");

  const [transportID, setTransportID] = useState('');
  const [location, setLocationD] = useState('');
  const [vehiNo, setVehiNo] = useState('');
  const [TransportStatus, setTransportStatus] = useState('');

  const createTransport = () => {
    const payload = {
      OrderID: OrderID,
      TransportID: transportID,
      location: location,
      VehicleNumber: vehiNo,
      TransportStatus: TransportStatus
    }

    console.log(payload)
    axios.post("http://localhost:5000/Transport/CreateTransport/", payload).then((res) => {
      Swal.fire("success", " success ", "success")
        navigate("");
      console.log(res.data)
    }).catch(
      (error) => console.log(error)
    )
  }

  const GetTopicData = async () => {
    let data = await OrderByID(id);
    console.log("Update topics", data);
    setOrderID(data?.data?.OrderID);
    setQTY(data?.data?.QTY);
    setPrice(data?.data?.Price);
    setDescription(data?.data?.Description);
    setstatus(data?.data?.status);
    setDeliveryAddress(data?.data?.DeliveryAddress);
  };

  useEffect(() => {
    GetTopicData();
  });

  return (
    <div>
      <SideNavbarSite/>
      <div class="container my-5 py-5 mx-auto">
        <div class="row">
          <div class="col-md-7">
            <div class="card border-success mb-4 border-4" style={{ maxWidth: '48rem' }}>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                  </div> <br />
                  <div class="col">
                    <center>
                      <h3 className=" fw-bolder mb-4">{OrderID} Order Delivery Status </h3>
                    </center>

                    <div className='row py-3'>
                      <div class="col-md-6">
                        <label for="" class="form-label">Order ID</label>
                        <input type="text"
                          class="form-control"
                          id="floatingInput"
                          readOnly={true}
                          value={OrderID}
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="" class="form-label">{" "}Quantity   {" "}</label>
                        <input type="text"
                          class="form-control"
                          id="floatingPassword"
                          readOnly={true}
                          value={QTY}
                        />
                      </div>
                    </div>

                    <div className='row py-3'>
                      <div class="col-md-4">
                        <label for="" class="form-label">{" "}Total Price {" "}</label>
                        <input type="text"
                          class="form-control"
                          id="exampleFormControlTextarea3"
                          readOnly={true}
                          value={Price} />
                      </div>
                      <div class="col-md-4">
                        <label for="" class="form-label">Delivery Address</label>
                        <input type="email"
                          class="form-control"
                          id="exampleFormControlTextarea3"
                          readOnly={true}
                          value={DeliveryAddress}
                        />

                      </div>
                      <div class="col-md-4">
                        <label for="" class="form-label">Order status </label>
                        <input type="text"
                          class="form-control"
                          id="exampleFormControlTextarea3"
                          readOnly={true}
                          value={status}
                        />
                      </div>
                    </div>

                    <div className='row py-3'>
                      <div class="col-md-12">
                        <label for="" class="form-label">{" "}Description  {" "}</label>
                        <textarea type="text"
                          class="form-control"
                          id="exampleFormControlTextarea3"
                          readOnly={true}
                          value={Description} rows="4"
                        />
                      </div>


                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5">
            <div class="card" style={{ maxWidth: '98rem' }}>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col py-4">
                      <center>
                        <h3 className="fw-bolder">Transport Order</h3>
                      </center>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <form >
                        <div>
                          <div class="col-md-12 py-2">
                            <label for="" class="form-label">{" "}Transport ID{" "}</label>
                            <input type="text"
                              class="form-control"
                              id="floatingInput"
                              value={transportID} onChange={(e) => setTransportID(e.target.value)}
                            />
                          </div>
                          <div class="col-md-12 py-2">
                            <label for="" class="form-label">{" "}Location   {" "}</label>
                            <input type="text"
                              class="form-control"
                              id="floatingPassword"
                              value={location} onChange={(e) => setLocationD(e.target.value)}
                            />
                          </div>


                          <div className='py-3'>
                            <div class="col-md-12">
                              <label for="" class="form-label">{" "}Vehicle Number  {" "}</label>
                              <input type="text"
                                class="form-control"
                                id="exampleFormControlTextarea3"
                                value={vehiNo} onChange={(e) => setVehiNo(e.target.value)}
                              />
                            </div>
                            <div class="py-3 col-md-12">
                              <label for="" class="form-label">{" "}Transport Status   {" "}</label>
                              <select
                                class="form-control"
                                id="floatingInput"
                                value={TransportStatus}
                                onChange={(e) => setTransportStatus(e.target.value)}
                              >
                                <option value=""></option>
                                <option value="delivered">Delivered</option>
                                <option value="notDelivered">Not Delivered</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                      <Link to="">
                        <button
                          type="submit"
                          onClick={() => createTransport()}
                          className="btn btn-success"
                        >
                          Transport Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default TransportOrderSup;