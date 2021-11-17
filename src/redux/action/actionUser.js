import {
    PROCESS_DATA_USER,
    SUCCESS_DATA_USER,
    FAILED_DATA_USER,
} from "../action/action";
import axios from "axios";

export async function actionUser(user) {

    .then((res) => {
    console.log(res.data.message);
    dispatch({
        type: SUCCESS_DATA_USER,
        message: res.data.message
    });
})
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FAILED_DATA_USER,
            });
        });
    return axios({
        method: "POST",
        baseURL: "http://localhost:8000/api/user/data",
        url: "/detail",
        headers: {
            "content-Type": "multipart/form-data",
        },
        data: getData,
    })
}
