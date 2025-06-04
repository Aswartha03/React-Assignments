import { counterReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { logger, delayMiddleware } from "./middleware";
// custom middleware

let store = createStore(
  counterReducer,
  applyMiddleware(logger, delayMiddleware)
);
export { store };
