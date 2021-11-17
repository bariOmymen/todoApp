import { SWITCH_FORM_STATE } from "../constants";
export const swicthForm = () => async (dispatch ,getState) => {
    dispatch(
        {
            type: SWITCH_FORM_STATE,
            payLoad: !getState().form.isOpen
        }
    );
};

