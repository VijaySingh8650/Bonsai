import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {
     const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    
    const callTheAPI = async() => {
        try {
            let res = await axios.post(`http://localhost:5000/users/login`,data);
            console.log(res.data.token);
            navigate("/");
        }
        catch (e) {
            console.log(e.message);
        }
    }
    const handleChange = (e) => {
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
              <input onChange={handleChange} type="email" name="email" />
              <input onChange={handleChange} type="password" name="password" />
              <input  type="submit" value="submit"/>
         </form>
    </div>
  )
}
