// import action type
import { PROCESS_LOGIN,LOGIN_FAILED, LOGIN_SUCCESS} from "../action/action";

// state awal
const initState = {
  message: "",
  isLoading: false,
  isSuccess: false,
  datas: {
    userId: 0,
  },
};

// mengolah data yang dikirim dari server dan di olah oleh reducer
export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_LOGIN:
      return {
        ...state,
        message: "",
        isLoading: true,
        isSuccess: false,
        datas: {
          ...state.datas,
          userId: 0,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isSuccess: false,
        datas: {
          ...state.datas,
          userId: 0,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isLoading: false,
        isSuccess: true,
        datas: {
          ...state.datas,
          userId: action.payload.userId,
        },
      };
    default:
      return state;
  }
};
