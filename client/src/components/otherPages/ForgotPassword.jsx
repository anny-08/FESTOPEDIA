import { LockOutlined } from '@material-ui/icons';
import { Grid, Paper, Avatar, TextField, Button, Typography, Box } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from "react";
import { UserContext } from "../../App";

const ForgotPassword = () => {
    const {state,dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const passwordForgot = async(e) =>{
        e.preventDefault();

        const res = await fetch('/forgot-password',{
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email
            })
        });
        const data = await res.json();
 
        if(res.status === 400 || !data){
            window.alert("Invalid email!");
            console.log("Invalid email!");
        }else{
            window.alert("A reset password link has been sent to your registered email ID.");
            console.log("A reset password link has been sent to your registered email ID.");
            //dispatch({type:"USER", payload:true})
            navigate('/login');
        }          
    }
 
    const paperStyle = { padding: 20, height: 270, width: 400, marginLeft: 'auto', marginRight: 'auto', marginTop: 210 }
    const avatarStyle = { backgroundColor: '#125ea2' }
    const buttonStyle = { margin: '35px 0' }

    return (
        <Box style={{background: '#06437c'}}>  
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                    <h1 style={{ margin: 0 }}>Reset password</h1>
                    <Typography variant='caption'>Kindly enter your registered email ID.</Typography>
                </Grid>
                <form>
                    <TextField style={{ marginTop: '5%' }} name = 'email' value = {email} onChange={(e)=>setEmail(e.target.value)} label='Email' placeholder='Enter email' fullWidth required />
                    <Button type='submit' color='primary' fullWidth variant='contained' style={buttonStyle} onClick={passwordForgot}>Send reset password link</Button>
                </form>
            </Paper>
        </Box>
    )
}

export default ForgotPassword;

//<Avatar style={avatarStyle}><PasswordIcon /></Avatar>