import jsPDF from 'jspdf';
import "jspdf-autotable";

const ApprovedPdf = users => {

    const payDoc = new jsPDF();

    const tableColumn = ["Order ID", "Delivery Address", "Date Created", "Quantity", "Price", "Status"];
    const tableRows = [];

    users.forEach(users => {
        const transactionData = [
            users.OrderID,
            users.DeliveryAddress,
            users.createdAt,
            users.QTY,
            users.Price,
            users.status
        ];
        
        tableRows.push(transactionData);
    });

    payDoc.autoTable(tableColumn, tableRows, { startY: 25 });
    payDoc.text("All Approved Orders Report", 80, 15); 
    payDoc.save(`AllApprovedOrders.pdf`);
};

export default ApprovedPdf;