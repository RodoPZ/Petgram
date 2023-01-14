import { createStore, applyMiddleware } from "redux";
import { isAuthReducer } from "./features/isAuth/isAuthSlice.js";
import thunk from "redux-thunk";

const persistedSession = sessionStorage.getItem("token");

let preloadedState;

persistedSession
  ? (preloadedState = { isAuth: true })
  : (preloadedState = { isAuth: false });
let store = createStore(isAuthReducer, preloadedState, applyMiddleware(thunk));

export default store;
