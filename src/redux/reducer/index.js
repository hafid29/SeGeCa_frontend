import {combineReducers} from 'redux';
// import reducer
import addBuildingReducer from './addBuildingReducer.js';
import loginReducer from './loginReducer.js';
import registerReducer from './registerReducer.js';
import addUserDataReducer from './addUserDataReducer.js';
import getUserByid from './getUserByidReducer.js'

export default combineReducers({
    // Setiap ada reducer baru tambahkan disini
    AddBuildingReducer : addBuildingReducer,
    LoginReducer: loginReducer,
    RegisterReducer: registerReducer,
    AddUserDataReducer : addUserDataReducer,
    GetUserByIdReducer: getUserByid
});