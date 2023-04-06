import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useFormik} from "formik";
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import {ButtonSuper} from "../common/ButtonSuper";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(3, 'Password cannot be less than 3 characters')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: values => {

        },
    });


    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <Paper>
                <h3 style={signIn}>Sign in</h3>
                <FormControl>
                    <div style={{margin: '0px 33px'}}>
                        <FormGroup>
                            <TextField sx={{'& .MuiInputBase-root': {fontFamily: 'Montserrat'}}} label="Email" margin="none" variant={'standard'} style={fieldStyle}/>


                            <FormControl
                                sx={{'& .MuiInputBase-root': {fontFamily: 'Montserrat'}}}
                                style={fieldStyle}
                                         variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControlLabel sx={{fontFamily: 'Arial'}} label={'Remember me'} control={<Checkbox/>}/>
                            <div>
                                <div style={{
                                    textAlign: 'end',
                                    marginTop: '20px',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    lineHeight: '17px',
                                    marginBottom: '69px'
                                }}>Forgot Password?
                                </div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <div>
                                    <ButtonSuper name={'Sign in'} variant={'contained'} style={buttonStyle}/>
                                    <p style={haveAccount}>Already have an account?</p>
                                    <p style={signInLink} >Sign in</p>
                                </div>

                            </div>


                        </FormGroup>
                    </div>
                </FormControl>


            </Paper>

        </Grid>
    </Grid>
}


const signIn = {
    padding: '35px 160px 41px',
    fontWeight: '600',
    fontSize: '26px',
}

const fieldStyle = {
    marginBottom: '24px',

}

const buttonStyle = {
    background: '#366EFF',
    boxShadow: '0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
    borderRadius: '30px',
    padding: '8px 144px',
    marginBottom: '31px'
}

const haveAccount = {
    fontWeight: '600',
    fontSize: '14',
    lineHeight: '24px',
    opacity: '0.5',
    marginBottom: '11px'
}

const signInLink = {
    fontWeight: '600',
    fontSize: '16',
    lineHeight: '24px',
    color: 'rgba(54, 110, 255, 1)',
    textDecorationLine: 'underline',
    marginBottom: '42px'
}
