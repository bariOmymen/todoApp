import { createStore, applyMiddleware, compose, combineReducers  } from "redux";
import thunk from "redux-thunk";
import { formReducer } from "./reducers/formReducer"
import { taskReducer } from "./reducers/taskReducer";

const initialState = {
    form : {
        isOpen : false
    },
    tasks: {
       taskList :localStorage.getItem('tasks') ?  JSON.parse(localStorage.getItem('tasks')) : []
    }
};

console.log(localStorage.getItem('tasks') ?  JSON.parse(localStorage.getItem('tasks')) : []);
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   
    combineReducers({
       form : formReducer,
       tasks : taskReducer
    
    },
    ),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;