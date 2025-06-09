import { createStore , applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {logger} from "redux-logger";
import { dataFetcher } from "./reducer";
let store = createStore(dataFetcher,applyMiddleware(logger,thunk))
export default store