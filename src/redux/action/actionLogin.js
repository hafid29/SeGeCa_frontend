import { PROCESS_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../action/action";
import axios from 'axios'

export const LoginAction = (user, password) => (dispatch) => {
    // Action untuk memproses data
    dispatch({type: PROCESS_LOGIN})
};
