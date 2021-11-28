import {
    PROCESS_DEL_USER_DETAIL,
    PROCESS_DEL_USER_SUCCESS,
    PROCESS_DEL_USER_FAILED,
  } from "./action";
  
  import axios from "axios";
  
  export const DelUserById = (user_id) => (dispatch) => {
    dispatch({ type: PROCESS_DEL_USER_DETAIL });
  
    return axios({
      method: "DELETE",
      baseURL: "http://localhost:8000/api/user",
      url: "/" + user_id,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
        console.log(res.data.data);
        return dispatch({
          type: PROCESS_DEL_USER_SUCCESS,
          payload: {
            data: res.data.data,
          },
        });
      })
      .catch((err) => {
        // debug error
        console.log(err);
        dispatch({ type: PROCESS_DEL_USER_FAILED });
      });
  };
  