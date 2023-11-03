import "@testing-library/jest-dom";
import Payment from "../components/admin/Payment";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("Render to the Payment page", () => {
  render(
    <BrowserRouter>
      <Payment />
    </BrowserRouter>
  );
});

// ────────────────────────────────────────────────────────────────────────────────
test("Payment Amount should be Number", () => {
    render(
      <BrowserRouter>
        <Payment />
      </BrowserRouter>
    );
    const amount = screen.getByPlaceholderText("Enter Payment Amount");
    expect(amount).toHaveAttribute("type", "number");
  });


// ────────────────────────────────────────────────────────────────────────────────
test("Payment Method should be Number", () => {
  render(
    <BrowserRouter>
      <Payment />
    </BrowserRouter>
  );
  const paymentMethod = screen.getByPlaceholderText("Enter Payment Method");
  expect(paymentMethod).toHaveAttribute("type", "text");
});

// ────────────────────────────────────────────────────────────────────────────────
test("Phone Number should be Number", () => {
  render(
    <BrowserRouter>
      <Payment />
    </BrowserRouter>
  );
  const phoneNumber = screen.getByPlaceholderText("Enter Phone Number");
  expect(phoneNumber).toHaveAttribute("type", "number");
});

// ────────────────────────────────────────────────────────────────────────────────
test("Order ID", () => {
  render(
    <BrowserRouter>
      <Payment />
    </BrowserRouter>
  );
  const orderID = screen.getByPlaceholderText("Enter Order ID");
  expect(orderID).toHaveAttribute("type", "text");
});