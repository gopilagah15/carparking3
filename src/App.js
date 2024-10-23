import React, { useState } from 'react';
import CarRegistrationForm from './components/CarRegistrationForm';
import ParkingOutForm from './components/ParkingOutForm';
import Receipt from './components/Receipt';
import DailyReport from './components/DailyReport';

const App = () => {
  const [parkingDetails, setParkingDetails] = useState(null);
  const [outTime, setOutTime] = useState('');
  const [parkingRecords, setParkingRecords] = useState([]);

  const handleCarRegistration = (details) => {
    setParkingDetails(details);
  };

  const handleParkingOut = (time) => {
    setOutTime(time);
    const finalDetails = { ...parkingDetails, outTime: time };
    setParkingRecords([...parkingRecords, finalDetails]);
  };

  return (
    <div>
      <h1>Parking Bill Tracking System</h1>
      <CarRegistrationForm onSubmit={handleCarRegistration} />
      {parkingDetails && <ParkingOutForm onSubmit={handleParkingOut} />}
      {outTime && <Receipt parkingDetails={{ ...parkingDetails, outTime }} />}
      <DailyReport parkingRecords={parkingRecords} />
    </div>
  );
};

export default App;
