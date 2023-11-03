import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import CreateDeliveryNote from "../components/Supplier/CreateDeliveryNote"


test("renders the Trans portOrder  page", () => {
  render(
    <BrowserRouter>
      <CreateDeliveryNote />
    </BrowserRouter>
  );
});

 // ────────────────────────────────────────────────────────────────────────────────

test("Date Should be valid date", () => {
    render(
      <BrowserRouter>
        <CreateDeliveryNote />
      </BrowserRouter>
    );
    const Date = screen.getByPlaceholderText("Enter Date");
    expect(Date).toHaveAttribute("type", "date");
  });