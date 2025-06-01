import { createStore } from "redux";
import todoReducer from "./reducers/toDoReducer";


let store = createStore(todoReducer)
export default store