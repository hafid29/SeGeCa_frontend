import { PROCESS_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../action/action";
import axios from "axios";

export const LoginAction = (user, password) => (dispatch) => {
  // Action untuk memproses data
  dispatch({ type: PROCESS_LOGIN });

  // merubah request ke json
  const json = JSON.stringify({
    username: user,
    password: password,
  });
  return axios({
    method: "POST",
    baseURL: "http://localhost:8000/api/user",
    url: "/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: json,
  })
    .then((res) => {
      console.log(res.data.datas);
      // untuk menampung data dari response
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          message: res.data.message,
          userId: res.data.datas[0].id,
          username: res.data.datas[0].username,
          roleName: res.data.datas[0].role_name,
          first_name: res.data.datas[0].user_datas.first_name,
        },
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: LOGIN_FAILED,
        payload: {
          message: "gagal login",
        },
      });
    });
};
