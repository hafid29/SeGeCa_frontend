import {
  PROCESS_REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../action/action";
import axios from "axios";

export const RegisterAction = (user, password, role) => (dispatch) => {
  // Action untuk memproses data
  dispatch({ type: PROCESS_REGISTER });

  // merubah request ke json
  const json = JSON.stringify({
    username: user,
    password: password,
    user_role: role,
  });

  return axios({
    method: "POST",
    baseURL: "http://localhost:8000/api/user",
    url: "/",
    headers: {
      "Content-Type": "application/json",
    },
    data: json,
  })
    .then((res) => {
      console.log(res.data.message);
      // untuk menampung data dari response
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      if (
        err.response.data.message.password[0] == "please fill password" ||
        err.response.data.message.username[0] == "please fill username"
      ) {
        dispatch({
          type: REGISTER_FAILED,
          payload: {
            message:"Lengkapi form",
          },
        });
      }
      dispatch({
        type: REGISTER_FAILED,
        payload: {
          message: "Gagal Register Data",
        },
      });
    });
};
