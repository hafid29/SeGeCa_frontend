import {
  PROCESS_ADD_USER_DATA,
  SUCCESS_ADD_USER_DATA,
  FAILED_ADD_USER_DATA,
} from "../action/action";
import axios from "axios";

export const ActionUserData = (data) => (dispatch) => {
  dispatch({ type: PROCESS_ADD_USER_DATA });

  // handle form data
  const formData = new FormData();
  formData.append("no_telp", data.no_telp);
  formData.append("photo_profile", data.photo_profile);
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("user_id", data.user_id);

  // call api
  return axios({
    method: "POST",
    baseURL: "http://localhost:8000/api/user",
    url: "/detail",
    headers: {
      "content-Type": "multipart/form-data",
    },
    data: formData,
  })
    .then((res) => {
      console.log(res.data.message);
      dispatch({
        type: SUCCESS_ADD_USER_DATA,
        message: res.data.message
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FAILED_ADD_USER_DATA,
      });
    });
};
