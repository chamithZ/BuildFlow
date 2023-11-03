import React, { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "reactstrap";

function DisplayOrderDeliverdStatus() {
  const [users, setusers] = useState();
  const [serachItem, setserachItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:5000/Transport/TansportALL/")
      ).data;
      console.log("all data", data)
      var array = []
      data?.map((users) => {
        if (users?.TransportStatus === "delivered") {
          array.push(users);
        }
      });
      setusers(array);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="container shadow my-5 mx-auto">
        <h3 className=" fw-bolder py-5"><center><b>Transport Status </b></center></h3>
        <div className="row">
          {loading}
          <div className="row">
            <div class="input-group">
              <div className="col-md-6 mx-auto">
                <input type="search" class="form-control rounded" placeholder="Search by Location" aria-label="Search" onChange={event => { setserachItem(event.target.value) }}
                  aria-describedby="search-addon" />
              </div>
            </div> <br /> <br /> <br />

            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">ID </th>
                  <th scope="col">Order ID </th>
                  <th scope="col">Transport ID</th>
                  <th scope="col">Send location   </th>
                  <th scope="col">Vehicle Number</th>
                  <th scope="col">Transport Status</th>
                </tr>
              </thead>

              <tbody className="table-border-divided">
                {users &&
                  users.filter((users) => {
                    if (serachItem == "") {
                      return users
                    } else if (users.location.toLowerCase().includes(serachItem.toLowerCase())) {
                      return users
                    }
                  })
                    .map((users, id) => {
                      return (
                        <tr>
                          <td>{id + 1}</td>
                          <td>{users.OrderID}</td>
                          <td>{users.TransportID}</td>
                          <td>{users.location}</td>
                          <td>{users.VehicleNumber}</td>
                          <td>
                            <Badge color="success" style={{ fontSize: "15px" }} >{users.TransportStatus} </Badge></td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayOrderDeliverdStatus;