import { Link } from "react-router-dom";
import React from 'react'
import delivery from "../images/delivery.gif"
import { MDBCard } from 'mdb-react-ui-kit'
import SideNavbarSite from "../Auth/SideNavbarSite";

const Dashborad = () => {
  return (
    <div>
      <SideNavbarSite />
      <div className="container shadow my-5 py-5 w-50 hform mx-auto">
        <h3 className=" fw-bolder"><center><b>Welcome to the Site Manager Dashboard </b></center></h3>
        <hr /> <br />
        <div className="container">
          <div>
            <div class="row">
              <div class="col mb-4 mx-auto">
                <MDBCard shadow='15' border='dark' background='white' className='mb-4'> <br />
                  <h5 class="card-title py-2"><center><b>Request Order</b></center></h5>
                  <center><img src={delivery} alt="build" className="dash_i" /></center>
                  <div class="card-body">
                    <center>
                      <Link to="/RequestOrder">
                        <button className="btn btn-dark w-25" type="submit" >
                          Request
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
                      <Link to="/DisplayOrderDeliverdStatus">
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


export default Dashborad;