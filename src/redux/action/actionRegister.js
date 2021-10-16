import { PROCESS_REGISTER, REGISTER_FAILED, REGISTER_SUCCESS } from "../action/action";
import axios from 'axios'

export const RegisterAction = (user, password) => (dispatch) => {
    
    // Action untuk memproses data
    dispatch({type: PROCESS_REGISTER})
    
    // merubah request ke json
    const json = JSON.stringify({
        username: user,
        password: password
    })
    return axios({
        method:"POST",
        baseURL:"http://localhost:8000/api/user",
        url:"/",
        headers:{
            'Content-Type': 'application/json',
        },
        data:json
    }).then((res) => {
        console.log(res.data)
        // untuk menampung data dari response
        dispatch({type: REGISTER_SUCCESS,payload:{
            message:res.data.message,
            userId: res.data.datas[0].id,
            username: res.data.datas[0].username
        }})
    }).catch((err) => {
        console.log(err.response.data)
        dispatch({type: REGISTER_FAILED,payload:{
            message:err.response.data.message
        }})
    })
};
