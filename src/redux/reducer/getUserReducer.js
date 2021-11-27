import {
  PROCESS_DATA_USER,
  SUCCESS_DATA_USER,
  FAILED_DATA_USER,
} from "../action/action";

const initState = {
  message: "",
  isLoading: false,
  isAlert: false,
  data: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_DATA_USER:
      return {
        isLoading: true,
      };
    case SUCCESS_DATA_USER:
      return {
        ...state,
        isLoading: false,
        isAlert: true,
        data: action.payload.data,
      };
    case FAILED_DATA_USER:
      return {
        ...state,
        isLoading: false,
        isAlert: true,
      };
    default:
      return state;
  }
};
