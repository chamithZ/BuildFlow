import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { OrderByID } from "../../Services/SupplierServices";
import axios from "axios";

const ViewOneOrder = () => {

  const { id } = useParams();
  console.log(id)

  const [OrderID, setOrderID] = useState("");
  const [DeliveryAddress, setDeliveryAddress] = useState("");
  const [QTY, setQTY] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setstatus] = useState("");
  const [Deadline, setDeadline] = useState("");
  const [Material, setMaterial] = useState("");
  const [users, setusers] = useState();

  const GetTopicData = async () => {
    let data = await OrderByID(id);
    console.log("Update topics", data);
    
  };

  const getAllOrders = () => {
    axios.get(`http://localhost:8080/api/order/getOrder/${id}`)
      .then((res) => {
        const orderData = res.data.content; // Assuming the order data is in content field
        console.log(orderData)
        setOrderID(orderData.orderId);
        setDeliveryAddress(orderData.deliveryAddress);
        setQTY(orderData.quantity);
        setPrice(orderData.price);
        setDescription(orderData.description);
        setstatus(orderData.orderStatus);
        setDeadline(orderData.requiredDate);
        setMaterial(orderData.supplier);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getAllOrders();
  }, []);
  


  return (
    <div>
      <div className="container shadow my-5 mx-auto w-50" id="cusdet">
        <div className="col p-3">
          <h3 className=" fw-bolder mb-4"><center><b className="text-danger">{OrderID}</b> Order Details  </center></h3> <hr />
          <form>
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
                <label for="" class="form-label">Quantity</label>
                <input type="text"
                  class="form-control"
                  id="floatingPassword"
                  readOnly={true}
                  value={QTY}
                />
              </div>

              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Total Price</label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Price}
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label">Description</label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Description}
                  />
                </div>
              </div>

              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Delivery Address</label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={DeliveryAddress}
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label">Order Status </label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={status}
                  />
                </div>

              </div>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Supplier</label>
                  <input type="textarea"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Material}
                  />
                </div>
                <div class="col-md-6">
                  <label for="" class="form-label"> Deadline </label>
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true}
                    value={Deadline}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewOneOrder;