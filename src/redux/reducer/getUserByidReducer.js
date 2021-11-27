import {
  PROCESS_GET_USER_DETAIL,
  PROCESS_GET_USER_SUCCESS,
  PROCESS_GET_USER_FAILED,
} from "../action/action";
const initState = {
  message: "",
  isLoading: false,
  isAlert: false,
  data: {
    first_name: null,
    last_name: null,
    no_telp: 0,
    photo_profile: null,
    image_url: null,
  },
};
export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_GET_USER_DETAIL:
      return {
        isLoading: true,
      };
    case PROCESS_GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAlert: true,
        ...state.data,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        no_telp: action.payload.no_telp,
        photo_profile: action.payload.photo_profile,
        image_url: action.payload.image_url
      };
    case PROCESS_GET_USER_FAILED:
      return {
        isLoading: false,
        isAlert: true
      };
    default:
      return state;
  }
};
