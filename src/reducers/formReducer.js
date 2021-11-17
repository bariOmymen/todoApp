import { SWITCH_FORM_STATE } from "../constants";
const initialState = {
    form : {
        isOpen : false
    }
}
export const formReducer = (state = initialState, action ) => {
    switch(action.type) {
        case SWITCH_FORM_STATE:
            
            return({isOpen : action.payLoad})
        default:
            return state;
    }
};