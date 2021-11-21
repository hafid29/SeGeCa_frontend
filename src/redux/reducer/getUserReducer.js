import {
    PROCESS_DATA_USER,
    SUCCESS_DATA_USER,
    FAILED_DATA_USER,
} from "../action/action";

const initState = {
    message: "",
    isLoading: false,
    isAlert: false,
    data: {
        first_name: null,
        last_name: null,
        no_telp: 0,
    },
};

export default (state = initState, action) => {
    switch (action.payload) {
        case PROCESS_DATA_USER:
            return {
                isLoading: true,
            };
        case SUCCESS_DATA_USER:
            return {
                isLoading: false,
                isAlert: true,
                ...state.data,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                no_telp: action.payload.no_telp,
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
