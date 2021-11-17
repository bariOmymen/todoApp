import { DELETE_TASK, SUBMIT_TASK } from "../constants"


// const initialState = {
    
//     tasks : localStorage.getItem('tasks') ?  JSON.parse(localStorage.getItem('tasks')) : [],
// }

export const taskReducer = (state = {tasks : { taskList : []}}, action) => {
    switch(action.type){
        case SUBMIT_TASK:  
         return({taskList: action.payLoad});
        case DELETE_TASK:
            return({taskList : action.payLoad});

    default:
        return state;
    }
}