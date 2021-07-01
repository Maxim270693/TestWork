import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Profile from "../../../components/profile/Profile";
import {Login} from "../../../components/login/Login";


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Profile/>} />
                <Route path={'/login'} render={() => <Login />} />

                <Route path={ '*' } render={ () => <h1>404: PAGE NOT FOUND</h1> }/>
            </Switch>
        </div>
    );
};

export default Routes;