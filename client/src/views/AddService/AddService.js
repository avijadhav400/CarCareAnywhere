import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, {Toaster} from 'react-hot-toast'
import "./AddService.css";

function AddService() {
  const [user, setUser] = useState("");
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [modelName, setModelName] = useState('')
  const [date, setDate] = useState('')
  const [issue, setIssue] = useState('')
  const [userId, setUserId] = useState('')
  const [location, setLocation] = useState('')

  

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      window.location.href = "/login";
    }
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const addService = async (e) => {
    e.preventDefault()
    toast.loading("Adding Service...")
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/add-service`,
        {name,
        email,
        modelName,
        issue,
        date,
        user: user._id,
        location
      }
      );
      toast.dismiss()
      toast.success(response.data.message)
      // alert(response.data.message)
      
    } catch (error) {
      console.log('Error adding service', error.message)
    }

  };

  return (
    <div className="add-service-container">
      <h2 className="text-center">Add Service</h2>
      <form onSubmit={addService} className="add-service-form">
        <div className="form-group">
          <label htmlFor="Name">Your Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="form-control"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e)=>setUserId(e.target.value)}
            className="form-control"
            placeholder="Enter Your User id"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="modelName">Model Name</label>
          <input
            type="text"
            name="modelName"
            value={modelName}
            onChange={(e)=>setModelName(e.target.value)}
            className="form-control"
            placeholder="Enter model name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="issue">Issue</label>
          <textarea
            name="issue"
            value={issue}
            onChange={(e)=>setIssue(e.target.value)}
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
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="form-control"
            placeholder="Enter your current location"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send Request
        </button>
      </form>
      <Toaster/>
    </div>
  );
}

export default AddService;
