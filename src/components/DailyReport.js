import { jsPDF } from "jspdf";

const DailyReport = ({ parkingRecords }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Daily Parking Report", 10, 10);

    parkingRecords.forEach((record, index) => {
      doc.text(`${index + 1}. ${record.vehicleNumber}, ${record.totalPrice}`, 10, 20 + index * 10);
    });

    doc.save("daily_report.pdf");
  };

  return (
    <div>
      <h3>Daily Report</h3>
      <button onClick={generatePDF}>Download PDF</button>
      <table>
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {parkingRecords.map((record, index) => {
            return <tr key={index}>
              <td>{record.vehicleNumber}</td>
              <td>{record.totalPrice}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DailyReport;
