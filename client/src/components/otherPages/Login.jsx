import { Grid, Paper, Avatar, TextField, Button, Typography, Box, Link as PasswordLink } from '@material-ui/core'
import { PersonOutlineOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";
 
const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const paperStyle = { padding: 20, height: 420, width: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 140 }
    const avatarStyle = { backgroundColor: '#125ea2' }
    const buttonStyle = { margin: '15px 0' }

    const [u_name, setU_name] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                u_name, password
            })
        });
        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid credentials! Please try again.");
            console.log("Invalid credentials! Please try again.");
        } else {
            window.alert("You've successfully logged in to our website!");
            console.log("You've successfully logged in to our website!");
            dispatch({ type: "USER", payload: true })
            navigate('/');
        }
    }

    return (
        <Box style={{ background: '#06437c' }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonOutlineOutlined /></Avatar>
                    <h1 style={{ margin: 0 }}>Log In</h1>
                    <Typography variant='caption'>Kindly enter your correct login details.</Typography>
                </Grid>
                <form>
                    <TextField style={{ marginTop: '3%' }} label='Username' name='u_name' value={u_name} onChange={(e) => setU_name(e.target.value)} placeholder='Enter username' fullWidth required />
                    <TextField label='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required />
                    <Button type='submit' color='primary' fullWidth variant='contained' style={buttonStyle} onClick={loginUser}>Log In</Button>
                    <Typography>
                        <Link to='/forgotPassword' style={{ textDecoration: 'none', color: 'inherit', marginTop: 5 }}><PasswordLink href='#'>
                            Forgot password?
                        </PasswordLink></Link>
                    </Typography>
                    <Typography style={{ marginTop: '12%' }}> Don't have an account?</Typography>
                    <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}><Button type='submit' color='primary' fullWidth variant='contained' style={buttonStyle}>Register here!</Button></Link>
                </form>
            </Paper>
        </Box>
    )
}

export default Login;