import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import {loadCurrentUser, loadUsersList, saveCurrentUser, saveUsersList} from "./localStorage"

const persistedState = {user:loadCurrentUser(), usersList:loadUsersList()};
const store = createStore(rootReducer,persistedState, composeWithDevTools());
console.log(store.getState());

store.subscribe(()=>{
    saveCurrentUser(store.getState().user);
    saveUsersList(store.getState().usersList)
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
