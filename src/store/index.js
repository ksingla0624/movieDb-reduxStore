import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./MovieStore";
const store = createStore(Reducer, applyMiddleware(thunk));
export default store;
