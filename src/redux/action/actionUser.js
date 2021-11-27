import {
  PROCESS_DATA_USER,
  SUCCESS_DATA_USER,
  FAILED_DATA_USER,
} from "../action/action";
import axios from "axios";

export const GetUser = () => (dispatch) => {
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
      return dispatch({
        type: SUCCESS_DATA_USER,
        payload: {
          data: res.data.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FAILED_DATA_USER,
      });
    });
};
