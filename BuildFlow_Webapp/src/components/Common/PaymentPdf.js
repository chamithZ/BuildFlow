import jsPDF from 'jspdf';
import "jspdf-autotable";

const PaymentPdf = users => {

    const payDoc = new jsPDF();

    const tableColumn = ["Order ID", "Amount", "Payment Method", "Phone Number"];
    const tableRows = [];

    users.forEach(users => {
        const transactionData = [
            users.orderID,
            users.amount,
            users.paymentMethod,
            users.phoneNumber
        ];
        
        tableRows.push(transactionData);
    });

    payDoc.autoTable(tableColumn, tableRows, { startY: 25 });
    payDoc.text("All Payment Report", 80, 15); 
    payDoc.save(`AllPayment.pdf`);
};

export default PaymentPdf;