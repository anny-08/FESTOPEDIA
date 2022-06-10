import { Grid, Paper, Avatar, TextField, Button, Box, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [invalidUser, setInvalidUser] = useState('');
    const [busy, setBusy] = useState(true);
    const [success, setSuccess] = useState(false);
    const [newPassword, setNewPassword] = useState({
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    //console.log(location);
    const { token, id } = queryString.parse(location.search);

    const verifyToken = async () => {
        try {
            //const { token, id } = queryString.parse(location.search);
            //setBusy(true)
            const { data } = await axios(
                `${baseUrl}/verify-token?token=${token}&id=${id}`
            );
            setBusy(false)
            //if(!data.success) return setInvalidUser(data.error)
            //console.log(data);
        } catch (error) {
            if (error?.response?.data) {
                const { data } = error.response;
                if (!data.success) return setInvalidUser(data.error);
                return console.log(error.response.data);
            }
            console.log(error);
        }
    };

    useEffect(() => {
        verifyToken()
    }, []);

    const handleOnChange = ({target}) => {
        const {name, value} = target;
        setNewPassword({...newPassword, [name]: value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {password, confirmPassword} = newPassword;
        if(password!==confirmPassword) {
            return setError("New password must be different!");
        }

        try {
            setBusy(true)
            //const { token, id } = queryString.parse(location.search);
            //setBusy(true)
            const { data } = await axios.post(
                `${baseUrl}/reset-password?token=${token}&id=${id}`, {password}
            );
            setBusy(false)
            if(data.success) {
                setSuccess(true)
                navigate('/login');
            }
            //if(!data.success) return setInvalidUser(data.error)
            //console.log(data);
        } catch (error) {
            setBusy(false)
            if (error?.response?.data) {
                const { data } = error.response;
                if (!data.success) return setError(data.error);
                return console.log(error.response.data);
            }
            console.log(error);
        }
    }

    if (success) return <Typography>
        <h1>Your password has been successfully reset!</h1>
    </Typography>

    if (invalidUser) return <Typography>
        <h1>{invalidUser}</h1>
    </Typography>

    if (busy) return <Typography>
        <h1>Kindly wait for a moment. Verifying reset token...</h1>
    </Typography>

    const paperStyle = { padding: 20, height: 300, width: 400, marginLeft: 'auto', marginRight: 'auto', marginTop: 210 }
    const avatarStyle = { backgroundColor: '#125ea2' }
    const buttonStyle = { margin: '35px 0' }

    return (
        <Box style={{ background: '#06437c' }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlined /></Avatar>
                    <h1 style={{ margin: 0 }}>Reset your password</h1>
                </Grid>
                <form onSubmit={handleSubmit}>
                    {error && <Typography><h3>{error}</h3></Typography>}
                    <TextField style={{ marginTop: '5%' }}
                        name='password'
                        type='password'
                        label='New password'
                        placeholder='Enter new password'
                        onChange={handleOnChange}
                        fullWidth
                        required />
                    <TextField style={{ marginTop: '5%' }}
                        name='confirmPassword'
                        type='password'
                        label='Confirm password'
                        placeholder='Re-enter new password'
                        onChange={handleOnChange}
                        fullWidth
                        required />
                    <Button type='submit' color='primary' fullWidth variant='contained' style={buttonStyle}>Submit</Button>
                </form>
            </Paper>
        </Box>
    )
}

export default ResetPassword;

//<Avatar style={avatarStyle}><PasswordIcon /></Avatar>