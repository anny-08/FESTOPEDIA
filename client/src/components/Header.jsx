import { AppBar, Toolbar, Typography, makeStyles, Box } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from "../App";
import React, { useState, useContext, useEffect } from "react";


const useStyles = makeStyles((theme) => ({
    component: {
        background: '#322b49',
        color: '#ffffff',
        height: 60,
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 15,
            cursor: 'pointer',
        }
    },
    followOptions: {
        fontSize: 25,
        color: '#ffffff',
        cursor: 'pointer',
        display: 'inline',
        marginRight: 'auto',
        marginLeft: -30,
        '& > *': {
            padding: 2,
            textDecoration: 'none',
            color: 'inherit'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 15
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 13
        }
    },
    userImage: {
        height: 35,
        width: 35,
        borderRadius: '50%',
        objectFit: 'cover',
        //float: 'right'
        [theme.breakpoints.down('sm')]: {
            height: 25,
            width: 25
        }
    },
    smallScreenFont: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 13
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 10,
        }
    }
}))


const Header = () => {
    const {state,dispatch} = useContext(UserContext);
    const classes = useStyles();
    const location = useLocation();
    const [userData, setUserData] = useState('');

    const callUser = async () => {
        try {
            const response = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            //console.log(data);
            setUserData(data);

            if (!response.status === 200) {
                const error = new Error(response.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            //navigate('/login');
        }
    }
    //callUser();
    useEffect(() => {
        callUser();
    }, [location.key]);

    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Typography className={classes.smallScreenFont}>FOLLOW US:</Typography>
                <Box className={classes.followOptions}>
                    <a href='https://www.linkedin.com/school/banasthali-vidyapith/?originalSubdomain=in' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://twitter.com/banasthali_vid' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-twitter-square"></i></a>
                    <a href='https://www.facebook.com/banasthali.org/' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-facebook-square"></i></a>
                </Box>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><Typography className={classes.smallScreenFont}>HOME</Typography></Link>
                <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}><Typography className={classes.smallScreenFont}>ABOUT US</Typography></Link>
                <Link to='/help' style={{ textDecoration: 'none', color: 'inherit' }}><Typography className={classes.smallScreenFont}>HELP</Typography></Link>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}><Typography className={classes.smallScreenFont}>CONTACT</Typography></Link>
                <Link to='/create' style={{ textDecoration: 'none', color: 'inherit' }}><Typography className={classes.smallScreenFont}>WRITE</Typography></Link>
                <Box style={{ display: 'flex', marginLeft: 'auto' }}>
                    {
                        state ? (
                            <>
                                <Link to='/logout' style={{ textDecoration: 'none', color: 'inherit', margin: 10}}><Typography className={classes.smallScreenFont}>LOGOUT</Typography></Link>
                                <Link to='/settings' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img 
                                        className={classes.userImage} 
                                        src= {userData.profile_pic === "" ? ("https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png") : userData.profile_pic }
                                        alt="Not found!" 
                                    />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to='/login' style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block', marginRight: 15 }}><Typography className={classes.smallScreenFont}>LOGIN</Typography></Link>
                                <Link to='/register' style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}><Typography className={classes.smallScreenFont}>REGISTER</Typography></Link>
                            </>
                        )
                    }
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;