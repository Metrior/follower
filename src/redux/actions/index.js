import * as actionTypes from "./types";

export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const setUsersList = user => {
  return {
    type: actionTypes.SET_USERS_LIST,
    payload: {
      currentUsersList: user
    }
  };
};
