import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

//import components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/RegisterUser";
import Landingscreen from "./components/Auth/Landingscreen";
import NavBar from "./components/Auth/NavBar";
import Profile from "./components/Auth/Profile";
import RequestOrder from "./components/Supplier/RequestOrder";
import AllOrderRequestView from "./components/Supplier/AllOrderRequestView";
import AddSupplier from "./components/procurementStaff/AddSupplier";
import DisplayPendingOrderList from "./components/procurementStaff/DisplayPendingOrderList";
import DisplayApprovedOrderList from "./components/procurementStaff/DisplayApprovedOrderList";
import EvaluateOrder from "./components/procurementStaff/EvaluateOrder";
import TransportOrder from "./components/Supplier/TransportOrder";
import Dashborad from "./components/SiteManager/Dashborad";
import DisplayOrderDeliverdStatus from "./components/SiteManager/DisplayOrderDeliverdStatus";
import DisplayAllOrders from "./components/Supplier/DisplayAllOrders";
import ViewOneOrder from "./components/Supplier/ViewOneOrder";
import DisplayRejectOrderList from "./components/procurementStaff/DisplayRejectOrderList";
import SendEmail from "./components/procurementStaff/SendEmail";
import DashboardSupply from "./components/Supplier/DashboradSupply";
import CreateDeliveryNote from "./components/Supplier/CreateDeliveryNote";
import SideNavbar from "./components/Auth/SideNavbar";
import AllOrders from "./components/procurementStaff/AllOrders";
import DisplayPendingOrderAdmin from "./components/admin/DisplayPendingOrderAdmin";
import DisplayRejectOrderAdmin from "./components/admin/DisplayRejectOrderAdmin";
import DisplayApprovedOrderAdmin from "./components/admin/DisplayApprovedOrderAdmin"
import DashboardAdmin from "./components/admin/DashboardAdmin";
import AllOrdersAdmin from "./components/admin/AllOrdersAdmin";
import TransportOrderSup from "./components/SiteManager/TransportOrderSup";
import AddOrder from "./components/SiteManager/AddOrder";
import updateorder from "./components/SiteManager/UpdateOrder"
import AllOrder from "./components/SiteManager/AllOrderView";
import AllOrdersSite from "./components/SiteManager/AllOrdersSite";
import DisplayApprovedOrderSite from "./components/SiteManager/DisplayApprovedOrderSite";
import DisplayRejectOrderSite from "./components/SiteManager/DisplayRejectOrderSite";
import AllSuppliers from "./components/Supplier/AllSuppliers";
import UpdateOrder from "./components/admin/UpdateOrder";
import Payment from "./components/admin/Payment";
import ViewPayment from "./components/SiteManager/ViewPayment";
import Footer from "./components/Auth/Footer";


function App() {
  const [, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("userRole"));
  }, []);

  return (
    <>
      <div >
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Landingscreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/RequestOrder" element={<RequestOrder />} />
            <Route path="/AllOrderRequestView" element={<AllOrderRequestView />} />
            <Route path="/AddSupplier" element={<AddSupplier />} />
            <Route path="/DisplayPendingOrderList" element={<DisplayPendingOrderList />} />
            <Route path="/DisplayApprovedOrderList" element={<DisplayApprovedOrderList />} />
            <Route path="/UpdateOrderById/:id" element={<EvaluateOrder />} />
            <Route path="/ViewOrderTransportById/:id" element={<TransportOrder />} />
            <Route path="/Dashborad" element={<Dashborad />} />
            <Route path="/DisplayOrderDeliverdStatus" element={<DisplayOrderDeliverdStatus />} />
            <Route path="/DisplayAllOrders" element={<DisplayAllOrders />} />
            <Route path="/ViewOrderssById/:id" element={<ViewOneOrder />} />
            <Route path="/DisplayRejectOrderList" element={<DisplayRejectOrderList />} />
            <Route path="/sendmail/:id" element={<SendEmail />} />
            <Route path="/DashboardSupply" element={<DashboardSupply />} />
            <Route path="/CreateDeliveryNote" element={<CreateDeliveryNote />} />
            <Route path="/SideNavbar" element={<SideNavbar />} />
            <Route path="/AllOrders" element={<AllOrders />} />
            <Route path="/DisplayPendingOrderAdmin" element={<DisplayPendingOrderAdmin />} />
            <Route path="/DisplayRejectOrderAdmin" element={<DisplayRejectOrderAdmin />} />
            <Route path="/DisplayApprovedOrderAdmin" element={<DisplayApprovedOrderAdmin />} />
            <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
            <Route path="/AllOrdersAdmin" element={<AllOrdersAdmin />} />
            <Route path="/TransportOrderSup" element={<TransportOrderSup />} />
            <Route path="/AllOrdersSite" element={<AllOrdersSite />} />
            <Route path="/DisplayApprovedOrderSite" element={<DisplayApprovedOrderSite />} />
            <Route path="/DisplayRejectOrderSite" element={<DisplayRejectOrderSite />} />
            <Route path="/AllSuppliers" element={<AllSuppliers />} />
            <Route path="/addorder" element={<AddOrder />} />
            <Route path="/UpdateOrder/:id" element={<UpdateOrder />} />
            <Route path="/payment/:id/:Price" element={<Payment />} />
            <Route path="/ViewPayment" element={<ViewPayment />} />
            <Route path="/deliverynote/:OrderID/:transportID" element={<CreateDeliveryNote />} />
            <Route path="/allorder" element={< AllOrder/>} />
            <Route path="/updateorder/:id" element={<updateorder/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;