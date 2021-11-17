import React from 'react'
import {FaTimes} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../actions/taskActions';

const Task = ({task, handleDelete, handleToggle}) => {
    const dispatch = useDispatch()
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} >
            <h3>
               {task.text}
               <FaTimes style={{color : 'red', cursor:'pointer'}} onClick={()=>dispatch(deleteTask(task.id))} />
            </h3>
            <p>
                {task.day}
            </p>
        </div>
    )
}
export default Task;