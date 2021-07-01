import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../../main/bll/store/store";
import {Redirect} from "react-router-dom";

const Profile = () => {

    const isLoggedIn = useSelector<RootStateType, boolean>((state) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <h2>Hi</h2>
        </div>
    );
};

export default Profile;