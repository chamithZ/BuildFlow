import jsPDF from 'jspdf';
import "jspdf-autotable";

const AllSuppliersPdf = users => {

    const payDoc = new jsPDF();

    const tableColumn = ["Full Name", "E-mail Address", "Company Name", "Supplier Address", "UserRole"];
    const tableRows = [];

    users.forEach(users => {
        const transactionData = [
            users.name,
            users.email,
            users.companyName,
            users.supplierAddress,
            users.userRole
        ];
        tableRows.push(transactionData);
    });
    payDoc.autoTable(tableColumn, tableRows, { startY: 25 });
    payDoc.text("All Suppliers Report", 80, 15);
    payDoc.save(`AllSuppliers.pdf`);
};

export default AllSuppliersPdf;