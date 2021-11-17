import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../task';


function Tasks() {
    const tasks = useSelector(state => state.tasks.taskList);
    
    return (
        <div>
          {tasks.length > 0 ? tasks.map( (task, index) => <Task task={task} key={index}/>) : "tasks are empty,. go take a nap"}  
        </div>
    )
}

export default Tasks
