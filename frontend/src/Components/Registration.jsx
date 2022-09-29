import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Registration = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: "", email: "", password: "" });
    

    const callTheAPI = async() => {
        try {
            let res = await axios.post(`http://localhost:5000/users/signup`, data);
            console.log(res.data.token);
            navigate("/login");
        }
        catch (e) {
            console.log(e.message);
        }
    }

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        callTheAPI();
    }

  return (
    <div>
          <form onSubmit={handleSubmit} action="">
              
              <input onChange={handleChnage} type="text" name="name" />
              <input onChange={handleChnage} type="email" name="email" />
              <input onChange={handleChnage} type="password" name="password"/>
              <input type="submit" value="submit"/>
              

          </form>
    </div>
  )
}

export default Registration
