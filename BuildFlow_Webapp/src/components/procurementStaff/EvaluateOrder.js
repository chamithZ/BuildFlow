import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { OrderByID, UpdateOrderById } from "../../Services/SupplierServices";
import SideNavbar from "../Auth/SideNavbar";

const EvaluateOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [OrderID, setOrderID] = useState("");
  const [status, setstatus] = useState("");
  const [note, setMessage] = useState("");

  const handleOrderid = (e) => {
    setOrderID(e.target.value);
  };

  const handlestatus = (e) => {
    setstatus(e.target.value);
  };

  const handlesetMessage = (e) => {
    setMessage(e.target.value);
  };

  const GetTopicData = async () => {
    let data = await OrderByID(id);
    console.log("Update topics", data);
    setOrderID(data?.data?.OrderID);
    setstatus(data?.data?.status);
    setMessage(data?.data?.note);
  };

  useEffect(() => {
    GetTopicData();
  }, []);

  const updateorderData = async (e) => {
    e.preventDefault();
    let newdata = {
      OrderID: OrderID,
      status: status,
      note: note
    };

    let data = await UpdateOrderById(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.OrderID) {
      Swal.fire("error", "Please Check Again", "error"); {
      }
    } else {
      Swal.fire("success", "Order Status Successfully Updated", "success"); {
      }
    }
  };

  return (
    <div>
      <SideNavbar />
      <div className="container my-5 py-5 mx-auto w-50 orderr">
        <form>
          <div class="card mx-auto" style={{ width: '40rem' }}>
            <div class="card-body">
              <h3 className=" fw-bolder"><center><b>Update Order Status</b></center></h3>
              <br />
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Order ID</label>
                </div>
                <div class="col-md-6">
                  <input type="text"
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    readOnly={true} onChange={handleOrderid} value={OrderID}
                  />
                </div>
              </div>

              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="" class="form-label">Order Status</label>
                </div>
                <div class="col-md-6">
                  <select
                    class="form-control"
                    id="floatingInput"
                    value={status}
                    onChange={handlestatus}
                  >
                    <option value="Select"></option>
                    <option value="OK">Approved</option>
                    <option value="decline">Decline</option>
                  </select>
                </div>
              </div>

              <div className="row py-3">
                <div class="col-md-12">
                  <label for="floatingInput">  Evaluate Message </label>
                  <div class="form-floating mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea3" onChange={handlesetMessage} value={note} required placeholder=" " rows="6">
                    </textarea>
                  </div>
                </div>
              </div>

              <center>
                <button
                  onClick={(e) => updateorderData(e)}
                  className="btn btn-danger "
                  type="submit"
                >
                  Update Order Status
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EvaluateOrder;