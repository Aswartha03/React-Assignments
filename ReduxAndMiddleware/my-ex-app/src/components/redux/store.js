import {thunk} from "redux-thunk"
import {createStore,applyMiddleware} from "redux"
import { fetchReducer } from "./reducer"
import {logger} from "redux-logger"

let store = createStore(fetchReducer,applyMiddleware(logger,thunk))
export {store}