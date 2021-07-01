import {combineReducers, createStore} from "redux";

const RootReducer = combineReducers({

})

export const store = createStore(RootReducer)

export type RootStoreType = ReturnType<typeof RootReducer>