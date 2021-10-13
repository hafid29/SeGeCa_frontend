import { PROCESS_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../action/action";
import axios from 'axios'

export const LoginAction = (user, password) => (dispatch) => {
    
    // Action untuk memproses data
    dispatch({type: PROCESS_LOGIN})
    
    // merubah request ke json
    const json = JSON.stringify({
        username: user,
        password: password
    })
    return axios({
        method:"POST",
        baseURL:"http://localhost:8000/api/user",
        url:"/login",
        headers:{
            'Content-Type': 'application/json',
        },
        data:json
    }).then((res) => {
        console.log(res.data)
        // untuk menampung data dari response
        dispatch({type: LOGIN_SUCCESS,payload:{
            message:res.data.message,
            userId: res.data.datas[0].id,
            username: res.data.datas[0].username
        }})
    }).catch((err) => {
        console.log(err.response.data)
        dispatch({type: LOGIN_FAILED,payload:{
            message:err.response.data.message
        }})
    })
};
