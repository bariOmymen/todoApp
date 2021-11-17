import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { submitTask } from '../../actions/taskActions'
import "./styles.css"


const AddTask = () =>{

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(true)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Task feild is required')
            return
        }
        let newTask = {text : text,
        day : day,
    reminder: reminder}
    dispatch(submitTask(newTask));
    setText('')
    setDay('')
    setReminder(true)
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input value={text} onChange={(e) => {setText(e.target.value)}} type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label>set Time and Date</label>
                <input value={day} onChange={(e) => {setDay(e.target.value)}} type='text' placeholder='Jan 1st 5:00am'/>
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(!reminder)} />
            </div>
            <input className="btn btn-block" type='submit' value='Save' />
        </form>
    )
}
export default AddTask;