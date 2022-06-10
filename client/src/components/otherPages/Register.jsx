import React,{useState} from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Select, MenuItem, makeStyles, Link } from '@material-ui/core'
import { PersonOutlineOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    dropdownUsertype: {
        display: 'flex',
        width: '100%',
        marginTop: '6%'
    },
})

const Register = () => {
    const navigate = useNavigate();
    const [user,setUser]=useState({
        u_name:"",email:"",password:"",ut_name:""
    });

    let name,value;

    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async(e)=>{
        e.preventDefault();
        const{u_name,email,password,ut_name}=user;
        const res = await fetch("/register",{
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                u_name,email,password,ut_name
            })
        }); 
        const data = await res.json();

        if(res.status === 500 || !data){
            window.alert("Invalid registration!");
            console.log("Invalid registration!");
        }else{
            window.alert("Verify your email id.");
            console.log("Verify your email id.");
            console.log(data);
            navigate('/verify-email', {state: data});
            //navigate('/otp', user);
            //dispatch(user);
        }         
    }

    const classes = useStyles();
    const paperStyle = { padding: 20, height: '65vh', width: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 130 }
    const avatarStyle = { backgroundColor: '#125ea2' }
    const buttonStyle = { margin: '60px 0' }
    // const pageCover = {backgroundColor: '#b5d7f7'}
    return (
        <Grid style={{ background: '#06437c' }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonOutlineOutlined /></Avatar>
                    <h1 style={{ margin: 0 }}>Register</h1>
                    <Typography variant='caption'>Kindly fill this form to register on Festopedia.</Typography>
                </Grid>
                <form method='POST'>
                    <TextField style={{marginTop: '14%'}} label='Username'
                    name = 'u_name'
                    value = {user.u_name}
                    onChange={handleInputs}
                    placeholder='Enter username' fullWidth required />
                    <TextField style={{marginTop: '2%'}} label='Email: example@banasthali.in'
                    name = 'email'
                    value = {user.email}
                    onChange={handleInputs}
                    placeholder='Enter Banasthali email ID' fullWidth required/>
                    <TextField style={{marginTop: '2%'}} label='Password'
                    name = 'password'
                    value = {user.password}
                    onChange={handleInputs}
                    placeholder='Create a password' type = 'password' fullWidth required/>
                    <Select
                        required
                        value={user.ut_name}
                        displayEmpty
                        onChange={handleInputs}
                        name='ut_name'
                        className={classes.dropdownUsertype}
                    >
                        <MenuItem value="" disabled>Select the user type for your account</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Professor">Professor</MenuItem>
                        <MenuItem value="Club Leader">Club Leader</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                    </Select>
                    <Link to='/verify-email' style={{ textDecoration: 'none', color: 'inherit' }}><Button type='submit' name = 'register' value = 'register' onClick={PostData} color='primary' fullWidth variant='contained' style={buttonStyle}>Submit</Button></Link>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;