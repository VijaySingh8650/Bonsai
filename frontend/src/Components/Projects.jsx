import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
    const [project, setProject] = useState([]);
    const callToAPI = async () => {
    try {
      let data = await axios.get(`http://localhost:5000/projects`, {
        headers: {
        token:`6334fca05100ed54a669fc79:c4@gmail.com`
          }
      });
        setProject([...data.data])
      console.log(data);
    } catch (e) { console.log(e.message) };
  }
  useEffect(() => {
    callToAPI();
    
  },[])
  return (
      <div>
          <Link to="/tasks">Tasks</Link>
       <div>
        {project?.map((project) => {
          return <div key={project._id}>
            <span>Project: {project.projectName}</span>
            {" "}
            <span>Currency: {project.currency}</span>
          </div>
        })}
     </div>
    </div>
  )
}

export default Projects
