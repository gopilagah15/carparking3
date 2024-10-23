import React, { useState } from 'react';

const CarRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    vehicleModel: '',
    dateOfParking: '',
    ownerContact: '',
    parkingTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="vehicleNumber" type="text" placeholder="Vehicle Number" onChange={handleChange} />
      <input name="vehicleModel" type="text" placeholder="Vehicle Model" onChange={handleChange} />
      <input name="dateOfParking" type="date" onChange={handleChange} />
      <input name="ownerContact" type="text" placeholder="Owner Contact" onChange={handleChange} />
      <input name="parkingTime" type="time" onChange={handleChange} />
      <button type="submit">Register Car</button>
    </form>
  );
};

export default CarRegistrationForm;