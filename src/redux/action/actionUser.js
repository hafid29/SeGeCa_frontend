import {
    PROCESS_DATA_USER,
    SUCCESS_DATA_USER,
    FAILED_DATA_USER,
} from "../action/action";
import axios from "axios";

export const GetUser = (user) => (dispatch) => {
    dispatch({ type: PROCESS_DATA_USER });

    return axios({
        method: "GET",
        baseURL: "http://localhost:8000/api/user",
        url: "/all",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            console.log(res.data.data);
            const { first_name, last_name, phone_number, username, password, user_id } = res.data.data[0];
            return dispatch({
                type: SUCCESS_DATA_USER,
                payload: {
                    user_id:user_id,
                    username: username,
                    password: password,
                    first_name: first_name,
                    last_name: last_name,
                    no_telp: phone_number,
                },
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FAILED_DATA_USER,
            });
        });
}
