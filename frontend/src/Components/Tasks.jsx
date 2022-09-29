import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Tasks = () => {
    const [task, setTask] = useState([]);
    const callToAPI = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/tasks`, {
        headers: {
        token:`63350664af003167af08deb9:Masai`
          }
      });
        setTask([...res.data]);
      console.log(res);
    } catch (e) { console.log(e.message) };
  }
  useEffect(() => {
    callToAPI();
    
  }, [])
    
    const handleTaskStatus=async(id,task)=> {
        try {
             await axios.patch(`http://localhost:5000/tasks/${id}`,{...task,status:!task.status});
            callToAPI();
      
    } catch (e) {console.log(e.message)};
    }
  return (
    <div>
          <h1>Tasks</h1>
           <div>
        {task?.map((task) => {
          return <div key={task._id}>
            <span>Project: {task.task}</span>
            {" "}
            <button onClick={()=>handleTaskStatus(task._id,task)}>Status: {task.status?"Complated":"Not Completed"}</button>
          </div>
        })}
     </div>
    </div>
  )
}

export default Tasks
