import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./Components/Profile";
import {Login} from "./Components/Login";
import {Error404} from "./Components/Error404";
import {NewPasswordEnter} from "./Components/NewPasswordEnter";
import {PasswordRecovery} from "./Components/PasswordRecovery";
import {Registration} from "./Components/Registration";


function App() {
    return <div>
        <Routes>
            <Route path={'profile'} element={<Profile/>}/>
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
