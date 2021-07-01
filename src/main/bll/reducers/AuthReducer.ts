import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../store/store";
import {authAPI, LoginParamsType} from "../../dal/API";


const SET_IS_LOGGED_IN = "login/SET-IS-LOGGED-IN"


const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState

export const AuthReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

//ActionCreators
export const setIsLoggedInAC = (value: boolean) => ({type: SET_IS_LOGGED_IN, value} as const)


//ThunkCreators
export const loginTC = (data: LoginParamsType) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    authAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
        })
        .catch((error) => {
            debugger
            // error.message
            console.log(error)
        })
}


type ActionType = ReturnType<typeof setIsLoggedInAC>

