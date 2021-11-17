import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const tasks = useSelector(state => state.tasks.taskList)
    return (
        <div className="container">
       <div className='header'>
        <h1> TodoApp </h1> 
        
       <Link to="/signup" className="form_switch">Signin or Signup</Link>
        </div>
       {tasks.length > 0 ? tasks.map((task, index) => <div key={index} className={`task ${task.reminder ? 'reminder' : ''}`} >
            <h3>
               {task.text}
              
            </h3>
            <p>
                {task.day}
            </p>
        </div> ) : "no tasks"}
        
        
       </div>
    )
}

export default Home
