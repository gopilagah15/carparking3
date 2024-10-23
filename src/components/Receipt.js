const calculateBill = (inTime, outTime) => {
  const startTime = new Date(`1970-01-01T${inTime}:00`);
  const endTime = new Date(`1970-01-01T${outTime}:00`);
  const diffMs = endTime - startTime;
  const totalMinutes = Math.floor(diffMs / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const extraMinutes = totalMinutes % 60;

  let totalPrice = 0;
  
  if (totalHours < 1) {
    totalPrice = 10; // Minimum charge if parked for less than an hour
  } else {
    totalPrice = 10 + 15 * (totalHours - 1) + 0.5 * extraMinutes;
  }

  return { totalHours, extraMinutes, totalPrice };
};

const Receipt = ({ parkingDetails }) => {
  const { inTime, outTime, parkingDate, vehicleNumber, vehicleModel } = parkingDetails;
  const { totalHours, extraMinutes, totalPrice } = calculateBill(inTime, outTime);

  return (
    <div>
      <h3>Receipt</h3>
      <p>Parking Date: {parkingDate}</p>
      <p>Vehicle Number: {vehicleNumber}</p>
      <p>Vehicle Model: {vehicleModel}</p>
      <p>In Time: {inTime}</p>
      <p>Out Time: {outTime}</p>
      <p>Total Time: {totalHours} hours and {extraMinutes} minutes</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
};

export default Receipt;
