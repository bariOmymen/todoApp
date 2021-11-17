import { DELETE_TASK, SUBMIT_TASK } from "../constants";

export const submitTask = (task) => async (dispatch, getState) => {
   const id = getState().tasks.taskList.length;
const all= {...task, id};
    dispatch({
        type: SUBMIT_TASK,
        payLoad: [...getState().tasks.taskList, all]
    })
   
    
    if(getState().tasks.taskList === [] || getState().tasks.taskList === null ) {
        localStorage.setItem('tasks', JSON.stringify([ task]));
        return
    }
    localStorage.setItem('tasks', JSON.stringify([...getState().tasks.taskList, task]));
   
}

export const deleteTask = (id) => async (dispatch, getState) => {
    const tasks = getState().tasks.taskList.slice().filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    dispatch({
        type : DELETE_TASK,
        payLoad : tasks
    })
}

