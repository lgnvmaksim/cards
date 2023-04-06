import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from './../assets/logo.svg'
import Box from "@mui/material/Box";
import {ButtonSuper} from "./common/ButtonSuper";

export const Header = () => {
    return <AppBar position="static" sx={{height: '60px', backgroundColor: '#FCFCFC', marginBottom: '60px'}}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1, backgroundImage: logo}}>
                <Box
                    component="img"
                    style={{margin: "6px 0px 6px 136px", height: '48px'}}
                    alt="IT-INC logo."
                    src={logo}
                />
            </Typography>
            <ButtonSuper name={'Sign in'} variant={'contained'} style={buttonStyle}/>
            {/*{isLoggedIn && <Button  variant={'outlined'} style={{color: 'white', borderColor:'white'}} onClick={() => dispatch(logoutTC())}>Logout</Button>}*/}
        </Toolbar>

    </AppBar>
}

const buttonStyle = {
    margin: '12px 136px 12px 0px',
    background: '#366EFF',
    boxShadow: '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
    borderRadius: '30px'
}