import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePdf = (users) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Define the table columns and an empty array for table rows
  const tableColumns = ['Order ID', 'Delivery Address', 'Date Created', 'Quantity', 'Price', 'Status'];
  const tableRows = [];

  // Loop through the users data and populate the table rows
  users.forEach((user) => {
    const rowData = [
      user.orderId,
      user.deliveryAddress,
      user.requiredDate,
      user.quantity,
      user.price,
      user.orderStatus,
    ];
    tableRows.push(rowData);
  });

  // Add the table to the PDF document
  doc.autoTable({
    head: [tableColumns],
    body: tableRows,
    startY: 20,
  });

  // Set the document title and save it
  doc.text('All Orders Report', 80, 10);
  doc.save('AllOrders.pdf');
};

export default generatePdf;
