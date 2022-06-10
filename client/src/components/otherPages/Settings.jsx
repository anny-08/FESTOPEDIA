import { Typography, Grid, makeStyles, Button, TextField, Box, Select, MenuItem } from '@material-ui/core';
import { AddCircle, BorderColor } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, deleteUser, uploadFile } from '../../service/api';

const useStyles = makeStyles((theme) => ({
    container: {
        '& > *': {
            display: 'flex',
            alignItems:'center',
        },
    },
    update: {
        marginTop: '1%',
        fontSize: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#20124d',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: 26,
        }
    },
    delete: {
        fontSize: 13,
        marginLeft: '42%',//'15%',
        //marginTop: '0%',
        color: 'white',
        background: '#4c1130',
        marginBottom: '5%',//'1%',
        [theme.breakpoints.down('sm')]: {
            height: '10%',
            width: '17%',
            fontSize: 8,
        }
    },
    //style={{ marginTop: '5%', marginBottom: '2%', width: '20%', marginLeft: '40%' }}
    userProfile: {
        marginLeft: '15%',
        marginTop: '2%',
        marginBottom: '1%',
        fontSize: 26,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        }
    },
    details: {
        marginLeft: '15%',
        marginTop: '2%',
        fontSize: 26,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        }
    },
    updateFields: {
        marginTop: '2%',
        '& > *': {
            marginLeft: '15%',
            width: '15%'
        }
    },
    labels: {
        fontSize: 18,
        display: 'flex',
        width: '25%',
        [theme.breakpoints.down('sm')]: {
            fontSize: 17,
            width: '40%',
        }
    },
    confirmFields: {
        marginBottom: '2%'
    },
    userImage: {
        height: '30vh',
        width: '16%',
        objectFit: 'cover',
        borderRadius: '25%',
        marginLeft: '15%',
        [theme.breakpoints.down('sm')]: {
            height: '25%',
            width: '25%'
        }
    },
    rightPortion: {
        '& > *': {
            display: 'flex'
        }
    },
    dropdownUsertype: {
        display: 'flex',
        width: '15%',
        [theme.breakpoints.down('md')]: {
            width: '25%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '23%'
        }
    }
}));

const initialValues = {
    profile_pic: '',
    u_name: '',
    ut_name: ''
}

const Settings = () => {
    const classes = useStyles();

    const [userData, setUserData] = useState(initialValues);
    const params = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

    const url = userData.profile_pic ? userData.profile_pic : 'https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png';
 
    const callUser = async () => {
        try {
            const response = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            console.log(data);
            setUserData(data);

            if (!response.status === 200) {
                const error = new Error(response.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callUser();
    }, []);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const editUser = async () => {
        await updateUser(userData._id, userData);
        navigate(`/`);
    }

    const removeUser = async () => {
        await deleteUser(userData._id);
        window.alert("Your account has been permanently deleted!");
        navigate('/logout');
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                userData.profile_pic = image.data;
                setImage(image.data);
            }
        }
        getImage();
    }, [file])

    return (
        <>
            <Box style={{background: '#f6fbfb'}}>
            <Typography className={classes.update}>Update your account</Typography>
            <Box>
            <Typography className={classes.userProfile}>Update user profile photo:</Typography>
                <img
                    className={classes.userImage}
                    src={url}
                    alt='cover'
                />
                <label htmlFor='fileInput'>
                    <AddCircle fontSize='large' color='action' />
                </label>
                <input
                    name='profile_pic'
                    type="file"
                    id='fileInput'
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </Box>
            <Box className={classes.container}>

                <Typography className={classes.details}>Details:</Typography>

                <Grid item className={classes.updateFields}>
                    <Typography className={classes.labels}>Update your username -</Typography>
                    <TextField
                        name='u_name'
                        placeholder='Update username'
                        value={userData.u_name}
                        onChange={(e) => handleChange(e)}
                    />
                </Grid>
                <Grid item className={classes.updateFields}>
                    <Typography className={classes.labels}>Update user type for your account -</Typography>
                    <Select
                        required
                        value={userData.ut_name}
                        displayEmpty
                        name='ut_name'
                        className={classes.dropdownUsertype}
                        onChange={(e) => handleChange(e)}
                    >
                        <MenuItem value="" disabled>Update the user type for your account</MenuItem>
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Professor">Professor</MenuItem>
                        <MenuItem value="Club Leader">Club Leader</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                    </Select>
                </Grid>
            </Box>
            <Button onClick={() => editUser()} type='submit' color='primary' variant='contained' style={{ marginTop: '5%', marginBottom: '2%', width: '20%', marginLeft: '40%' }}>
                Update
            </Button>
            <Button
                variant='contained'
                className={classes.delete}
                onClick={() => removeUser()}
            >
                Delete account permanently
            </Button>
            </Box>
        </>
    )
}

export default Settings;