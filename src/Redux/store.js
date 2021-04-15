import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "../MainApp/Redux/appReducer";
import { reducer } from "./reducer";
const rootReducer = combineReducers({
  reducer,
  appRed:appReducer
})
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
