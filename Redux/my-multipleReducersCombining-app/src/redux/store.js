import { createStore  } from "redux";
import { rootReducer } from "./reducers/rootReducer";

let store = createStore(rootReducer)
export {store}