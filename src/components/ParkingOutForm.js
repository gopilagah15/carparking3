import { useState } from "react";


const ParkingOutForm = ({ onSubmit }) => {
    const [outTime, setOutTime] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(outTime);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="time" value={outTime} onChange={(e) => setOutTime(e.target.value)} />
        <button type="submit">Enter Parking Out Time</button>
      </form>
    );
  };
  
  export default ParkingOutForm;
  