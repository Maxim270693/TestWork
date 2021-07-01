import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routes from "./main/ui/routes/Routes";

function App() {
    return (
        <div>
           <HashRouter>
               <Routes/>
           </HashRouter>
        </div>
    );
}

export default App;
