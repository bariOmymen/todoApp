import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from '../../components/addTask/AddTask'
import Header from '../../components/header'
import Tasks from '../../components/tasks'

function Notes() {
    const isFromOpen = useSelector(state => state.form.isOpen);
    return (
        <div className="container">
        <Header title="todo app" />
        <Tasks />
        {isFromOpen &&  <AddTask />}
       </div>
    )
}

export default Notes
