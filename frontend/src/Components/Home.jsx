import axios from 'axios'
import React, { useEffect }  from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [client, setClient] = useState([]);

  const callToAPI = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/clients`, {
        headers: {
        token:`6334dda7aec01380c7a18b12:w@gmail.com:w`
        }
      });
      setClient([...res.data])
      console.log(res);
    } catch (e) { console.log(e.message) };
  }
  useEffect(() => {
    callToAPI();
    
  },[])
  return (
    <div>
     <Link to="/projects">Projects</Link>
      <div>
        {client?.map((client) => {
          return <div key={client._id}>
            <span>Email: {client.email}</span>
            {" "}
            <span>Name: {client.name}</span>
          </div>
        })}
     </div>
    </div>
  )
}

export default Home
