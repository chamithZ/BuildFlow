import axios from 'axios';

let RegisterSupURL = "c";
let RegisterURL = "http://localhost:5000/user/signup";
let LoginURL = "http://localhost:5000/user/signin";
let AuthURL = "http://localhost:5000/user/auth";
let getAllUsers = "http://localhost:5000/user/getallusers";
let UpdateHotelAdmin = "http://localhost:5000/user/updateuserById/";
let DeleteHotelAdmin = "http://localhost:5000/user/deleteUser/";

export async function RegisterSiteManager(data) {
  const alldata = {
    name: data.name,
    email: data.email,
    password: data.password,
    supplierAddress: data.supplierAddress,
    companyName: data.companyName,
    userRole: "siteManager"
  };
  return await axios.post(RegisterSupURL, alldata);
}

export async function RegisterSupplier(data) {
  const alldata = {
    name: data.name,
    email: data.email,
    password: data.password,
    supplierAddress: data.supplierAddress,
    companyName: data.companyName,
    userRole: "supplier"
  };
  return await axios.post(RegisterURL, alldata);
}

export async function LoginSupplier(data) {
  const alldata = {
    email: data.email,
    password: data.password,
  };
  return await axios.post(LoginURL, alldata);
}

export async function AuthUser(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(AuthURL, config);
}

export async function getAllSupplier() {
  return axios.get(getAllUsers);
}

export async function UpdateSupplier(id, data) {
  const alldata = {
    name: data.name,
    email: data.email,
    password: data.password,
    supplierAddress: data.supplierAddress,
    companyName: data.companyName,
    userRole: "supplier"
  };
  return await axios.patch(UpdateHotelAdmin + id, alldata);
}

export async function Deletesupplier(id) {
  return await axios.delete(DeleteHotelAdmin + id);
}