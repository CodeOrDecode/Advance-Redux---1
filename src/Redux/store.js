import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { themereducer } from "./themereducer";

const rootreducer = combineReducers({
    themereducer
})

const mymiddle = (store) => (next) => (action) => {
    console.log(`Type is : ${action.type}`);
    console.log(`Payload is : ${action.payload}`);
    next(action);

}

export const store = legacy_createStore(rootreducer, applyMiddleware(mymiddle));


