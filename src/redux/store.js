import {createStore} from "redux"
import { textReducer } from "./textChangeReducer"

const store=createStore(textReducer)

export default store