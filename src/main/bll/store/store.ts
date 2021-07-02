import {applyMiddleware, combineReducers, createStore} from "redux";
import {AuthReducer} from "../reducers/AuthReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../../../utils/localStorage-utils";

const reducer = combineReducers({
    auth: AuthReducer
})


export const store = createStore(reducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        auth: store.getState().auth
    })
})

export type RootStateType = ReturnType<typeof reducer>