import React, {useEffect} from 'react';
import s from './profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../main/bll/store/store";
import {Redirect} from "react-router-dom";
import {ResMeType} from "../../main/dal/API";
import {setMeTC, logOutTC} from "../../main/bll/reducers/AuthReducer";
import Spinner from "../spinner/Spinner";

const Profile = () => {

    const isLoggedIn = useSelector<RootStateType, boolean>((state) => state.auth.isLoggedIn)
    const profile = useSelector<RootStateType, ResMeType>((state) => state.auth.profileData)
    const isInitialized = useSelector<RootStateType, boolean>((state) => state.auth.isInitialized)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(setMeTC())
        }
    },[dispatch])

    const logOutHandler = () => {
        dispatch(logOutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    if(isInitialized) {
        return <Spinner/>
    }

    return (
        <div className={s.profile} >
            <div>
                <div>{profile.email}</div>
                <div>{profile.name}</div>
            </div>
            <div>
                <button className={s.btn} onClick={logOutHandler}>LogOut</button>
            </div>
        </div>
    );
};

export default Profile;