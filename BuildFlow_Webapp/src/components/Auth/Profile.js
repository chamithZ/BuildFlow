import React from "react";
import { useState, useEffect } from 'react'
import { AuthUser } from "../../Services/AuthServices";
import { Tabs } from "antd";
import logo from '../images/loginn.png'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const { TabPane } = Tabs;

const Profile = () => {

  const [Fullname, setUserName] = useState("");
  const [email, setUserEmail] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const details = async () => {
    let token = localStorage.getItem('token');
    let data = await AuthUser(token);
    console.log("current User", data?.data);
    setUserName(data?.data?.userRole);
    setUserEmail(data?.data?.email);
  }

  useEffect(() => {
    details();
  })

  return (
    <div>
      <div className='container shadow border my-5 mx-auto w-50'>
        <div className="">
          <Tabs defaultActiveKey="1">
            <TabPane tab="" key="1">
              <MDBContainer className="container h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                  <MDBCol md="22" xl="6">
                    <h3 className=" fw-bolder"><center><b>My Profile</b></center></h3> <hr />
                    <MDBCard style={{ borderRadius: '25px', backgroundColor: '#f7e34a', width: '100%' }}>
                      <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                          <MDBCardImage src={logo}
                            className="rounded-circle" fluid style={{ width: '50%' }} />
                        </div>
                        <MDBTypography tag="h4" onChange={handleUserName} value={Fullname} type="text" readOnly={true} >{Fullname}</MDBTypography>
                        <MDBCardText className="text-muted mb-4" onChange={handleUserEmail} value={email} type="email" readOnly  >
                          <span className="mx-2" onChange={handleUserEmail} type="email" readOnly>{email}</span>
                        </MDBCardText>
                        <div className="mb-4 pb-2">
                          <MDBBtn outline floating>
                            <MDBIcon fab icon="facebook" size="lg" />
                          </MDBBtn>
                          <MDBBtn outline floating className="mx-1">
                            <MDBIcon fab icon="twitter" size="lg" />
                          </MDBBtn>
                          <MDBBtn outline floating>
                            <MDBIcon fab icon="skype" size="lg" />
                          </MDBBtn>
                        </div> <br />
                      </MDBCardBody>
                    </MDBCard> <br /><br />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Profile