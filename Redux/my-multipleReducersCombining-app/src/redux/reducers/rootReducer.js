import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import authReducer from "./authReducer";
let rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
export { rootReducer };
