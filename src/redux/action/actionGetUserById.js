import {
  PROCESS_GET_USER_DETAIL,
  PROCESS_GET_USER_SUCCESS,
  PROCESS_GET_USER_FAILED,
} from "../action/action";

import axios from "axios";

export const GetUserById = (user_id) => (dispatch) => {
  dispatch({ type: PROCESS_GET_USER_DETAIL });

  return axios({
    method: "GET",
    baseURL: "http://localhost:8000/api/user",
    url: "/" + user_id,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      // debug
      console.log(res.data.data)
      const { first_name, last_name, phone_number,photo_profile,image_url } = res.data.data[0];
      return dispatch({
        type: PROCESS_GET_USER_SUCCESS,
        payload: {
          first_name: first_name,
          last_name: last_name,
          no_telp: phone_number,
          photo_profile: photo_profile,
          image_url:image_url,
        },
      });
    })
    .catch((err) => {
      // debug error
      console.log(err);
      dispatch({ type: PROCESS_GET_USER_FAILED });
    });
};
