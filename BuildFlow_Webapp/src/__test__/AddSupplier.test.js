import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import AddSupplier from "../components/procurementStaff/AddSupplier";

test("renders the AddSupplier  page", () => {
  render(
    <BrowserRouter>
      <AddSupplier />
    </BrowserRouter>
  );
});

// ────────────────────────────────────────────────────────────────────────────────

test("company Name input should have a type as text", () => {
    render(
      <BrowserRouter>
        <AddSupplier />
      </BrowserRouter>
    );
    const companyName = screen.getByPlaceholderText("Enter Company Name");
    expect(companyName).toHaveAttribute("type", "text");
  });
  

  // ────────────────────────────────────────────────────────────────────────────────

test("email  input should have a type as email", () => {
    render(
      <BrowserRouter>
        <AddSupplier />
      </BrowserRouter>
    );
    const email = screen.getByPlaceholderText("Enter Your E-mail");
    expect(email).toHaveAttribute("type", "email");
  });
  

    // ────────────────────────────────────────────────────────────────────────────────

test("supplier Address  input should have a type as text", () => {
    render(
      <BrowserRouter>
        <AddSupplier />
      </BrowserRouter>
    );
    const supplierAddress = screen.getByPlaceholderText("Enter Supplier Address");
    expect(supplierAddress).toHaveAttribute("type", "text");
});
  


     // ────────────────────────────────────────────────────────────────────────────────

test("full name input should have a type as text ", () => {
    render(
      <BrowserRouter>
        <AddSupplier />
      </BrowserRouter>
    );
    const name = screen.getByPlaceholderText("Enter Your Name");
    expect(name).toHaveAttribute("type", "text");
  });