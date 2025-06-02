import {applyMiddleware, createStore} from "redux"
import { fetchReducer } from "./reducer"
import logger from "react-logger"
import {thunk} from "redux-thunk"
let store = createStore(fetchReducer,applyMiddleware(thunk))
export {store}