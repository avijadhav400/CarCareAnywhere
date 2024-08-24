import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
import "./Signup.css";

function Signup() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async()=>{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      fullName: fullName,
      email: email,
      password: password
    })

    if(response.data.success){
      toast.success(response.data.message)
      window.location.href = '/'
    }else{
      toast.error(response.data.message)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signup();
  };

  return (
    <div>
      <div className="signup-container">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={signup}
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
      <Toaster/>
    </div>
  );
}

export default Signup;
