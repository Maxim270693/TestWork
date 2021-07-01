import {applyMiddleware, combineReducers, createStore} from "redux";
import {AuthReducer} from "../reducers/AuthReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    auth: AuthReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof reducer>