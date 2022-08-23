import { peopleReducer } from "./reducers/peopleReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    people: peopleReducer
});

export const store = createStore(reducer, composeWithDevTools());


