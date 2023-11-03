import { Link } from "react-router-dom";
import React from 'react'
import supply from "../images/supply.gif"
import { MDBCard } from 'mdb-react-ui-kit'
import SideNavbarSup from '../Auth/SideNavbarSup'

const DashboardSupply = () => {

  return (
    <div>
      <SideNavbarSup />
      <div className="container shadow my-5 py-5 w-50 hform mx-auto">
        <h3 className=" fw-bolder"><center><b>Welcome to the Site Manager Dashboard </b></center></h3>
        <hr /> <br />
        <div className="container">
          <div>
            <div class="row">
              <div class="col mb-6">
                <MDBCard shadow='15' border='dark' background='white' className='mb-4'> <br/>
                  <h5 class="card-title py-2"><center><b>Add orders</b></center></h5>
                  <center><img src={supply} alt="build" className="dash_i" /></center>
                  <div class="card-body">
                    <center>
                      <Link to="/addorder">
                        <button className="btn btn-dark w-25" type="submit" >
                          Add Order
                        </button>
                      </Link>
                    </center>
                  </div>
                  <div class="card-body">
                    <center>
                      <Link to="/AllOrders">
                        <button className="btn btn-dark w-25" type="submit" >
                          View all Orders
                        </button>
                      </Link>
                    </center>
                  </div>
                </MDBCard>
              </div>
              {/* <div class="col mb-6">
                <MDBCard shadow='15' border='dark' background='white' className='mb-3'>
                  <h5 class="card-title py-2"> <center><b> All Delivery </b></center></h5>
                  <img src={delivery} alt="delivery" className="dash_img hi" />
                  <div class="card-body">
                    <center>
                      <p class="card-text">View all Supplier Delivered Status</p>
                      <Link to="/AllOrderRequestView">
                        <button className="btn btn-outline-success mx-auto" type="submit" >
                          Click Here
                        </button>
                      </Link>
                    </center>
                  </div>
                </MDBCard>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )


}


export default DashboardSupply;