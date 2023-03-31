import React from 'react';
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../components/Profile";
import {Login} from "../components/Login";
import {Error404} from "../components/Error404";
import {NewPasswordEnter} from "../components/NewPasswordEnter";
import {PasswordRecovery} from "../components/PasswordRecovery";
import {Registration} from "../components/Registration";
import {Header} from "../components/Header";


function App() {
    return <div>
        <Header/>

        <Routes>
            <Route path={'/'} element={<Profile/>}/>
            <Route path={'registration'} element={<Registration/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'password-recovery'} element={<PasswordRecovery/>}/>
            <Route path={'new-password'} element={<NewPasswordEnter/>}/>
            <Route path={'404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to={'404'}/>}/>
        </Routes>
    </div>
}

export default App;
