import {combineReducers} from "redux"
import * as actionTypes from "../actions/types";
import db from "../../db"

const initialUserState = {
    currentUser: null,
    currentUsersList: db.users
};

const user_reducer =(state=initialUserState, action)=>{
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
            };
        default:
            return state;
    }
};

const users_list_reducer =(state=initialUserState, action)=>{
    switch (action.type) {
        case actionTypes.SET_USERS_LIST:
            return {
                currentUsersList: action.payload.currentUsersList,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    user: user_reducer,
    usersList: users_list_reducer
});

export default rootReducer;