import React, {useState} from 'react';
import toast, {Toaster} from 'react-hot-toast'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async()=>{

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    })
    if(response.data.success){
      toast.success(response.data.message)
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      toast.loading("Redirecting to home")
      setTimeout(() => {
      }, 2000);
      window.location.href = '/'
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className="login-container">
      <h2 className="text-center">Login</h2>
      <form>
        <div className="form-group">
          <input type="email"
           className="form-control" 
           placeholder="Email" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required />
        </div>

        <div className="form-group">
          <input type="password" 
          className="form-control" 
          placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required />
        </div>

        <div className="form-group">
          <button type="submit" 
          className="btn btn-primary btn-block"
          onClick={login}
          >Login</button>
        </div>
        <div className="text-center">
          <a href='https://google.com'>Forgot Password?</a>
        </div>
        <div className="text-center">
            <Link to="/signup">Don't have an account? Signup</Link>
          </div>
      </form>
      <Toaster/>
    </div>
  );
}

export default Login;
