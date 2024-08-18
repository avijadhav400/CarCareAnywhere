import React, { useState } from 'react';
import './AddService.css'; // Make sure this follows the same design as login and signup

function AddService() {
  const [formData, setFormData] = useState({
    vehicleName: '',
    model: '',
    date: '',
    issue: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add the API call here to submit the form data
  };

  return (
    <div className="add-service-container">
      <h2 className="text-center">Add Service</h2>
      <form onSubmit={handleSubmit} className="add-service-form">
        <div className="form-group">
          <label htmlFor="vehicleName">Vehicle Name</label>
          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter vehicle name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter model"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="issue">Issue</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="form-control"
            rows="4"
            placeholder="Describe the issue"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Current Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your current location"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send Request
        </button>
      </form>
    </div>
  );
}

export default AddService;
