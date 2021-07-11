import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../store/store";
import {authAPI, LoginParamsType, ResMeType} from "../../dal/API";


const SET_IS_LOGGED_IN = "login/SET-IS-LOGGED-IN"
const SET_DATA = "login/SET_DATA"
const SET_IS_INITIALIZED = "login/SET-IS-INITIALIZED"

const initialState = {
    isLoggedIn: false,
    accessToken: '',
    profileData: {} as ResMeType,
    isInitialized: false
}

type InitialStateType = typeof initialState

export const AuthReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.value,
                accessToken: action.token
            }
        case SET_DATA :
            return {
                ...state,
                profileData: action.data
            }
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state
    }
}

//ActionCreators
export const setIsLoggedInAC = (value: boolean, token: string) => ({type: SET_IS_LOGGED_IN, value, token} as const)
export const setProfileAC = (data: ResMeType) => ({type: SET_DATA, data} as const)
export const setInitializedAC = (isInitialized: boolean) => ({type: SET_IS_INITIALIZED, isInitialized} as const)

//ThunkCreators
export const loginTC = (data: LoginParamsType) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    dispatch(setInitializedAC(true))
    authAPI.login(data)
        .then((res) => {
            dispatch(setIsLoggedInAC(true, res.data.data.accessToken))
            dispatch(setMeTC())
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
        .finally(() => {
            dispatch(setInitializedAC(false))
    })
}
export const setMeTC = () => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>, getState: () => RootStateType) => {
    dispatch(setInitializedAC(true))
    const token = getState().auth.accessToken
    authAPI.me(token)
        .then((res) => {
            dispatch(setProfileAC(res.data.data))
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
        .finally(() => {
            dispatch(setInitializedAC(false))
        })
}



export const logOutTC = () => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>, getState: () => RootStateType) => {
    const token = getState().auth.accessToken
    dispatch(setInitializedAC(true))
    authAPI.logOut(token)
        .then((res) => {
            dispatch(setIsLoggedInAC(true, token))
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
        .finally(() => {
            dispatch(setInitializedAC(false))
        })
}


type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
type SetProfileActionType = ReturnType<typeof setProfileAC>
type SetInitializedActionType = ReturnType<typeof setInitializedAC>

type ActionType = SetIsLoggedInActionType | SetProfileActionType | SetInitializedActionType

