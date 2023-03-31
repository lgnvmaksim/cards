import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useFormik} from "formik";
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/icons-material/CheckBox";
import {Checkbox} from "@mui/material";
import {ButtonSuper} from "./common/ButtonSuper";

export const Login = () => {

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


    return  <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <Paper>
                <FormControl>
                    <h3 style={signIn}>Sign in</h3>
                    <FormLabel>

                    </FormLabel>
                    <FormGroup>
                        <TextField label="Email" margin="normal"/>
                        <TextField type="password" label="Password"
                                   margin="normal"
                        />
                        <FormControlLabel label={'Remember me'} control={<Checkbox/>}/>
                <ButtonSuper name={'Sign in'}/>
                    </FormGroup>
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

const labelStyles = {
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '20px'
}

const fieldStyle = {
    marginBottom: '24px'
}

const checkboxStyle = {
    marginBottom: '28px'
}