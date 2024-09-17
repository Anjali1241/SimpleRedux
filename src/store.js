import { createStore } from "redux";
import CounterReducer from "./reducers";

export const store=createStore(CounterReducer)