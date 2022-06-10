import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../service/api';
//import Header from "components/Header";
//import AppConfig from "App.config";
//import ExternalInfo from "components/ExternalInfo";

const useStyles = makeStyles({
    otpFields: {
        width: '2%',
        marginTop: '4%',
        marginLeft: 5,
        marginRight: 5
    },
    otpBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearButton: {
        marginRight: '2%'
    },
    otpEntered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: '2%'
    },
    otpButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%'
    }
})

const isObjValid = (obj) => {
    return Object.values(obj).every(val => val.trim())
}

const OTPBox = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    //const {profile} = route.params;
    //const id=state.id;
    const id = location.state._id;

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    let val = '';
    if (isObjValid(otp)) {
        //let val = '';
        Object.values(otp).forEach(v => {
            val += v;
        })
    }
    console.log(val);
    console.log(id);
 
    const emailVerification = async () => {
        const res = await verifyEmail(id, val);
        console.log(res);
        const k = res["status"];
        console.log(k);
        if(k===200){
            window.alert("OTP verified");
            navigate('/login');
        }
        else{
            window.alert("Invalid OTP!");
        }
    }


    return (
        <>
            <Grid style={{ marginTop: '17%' }}>
                <div className="row">
                    <div className="col text-center">
                        <Grid align='center'>
                            <h1 style={{ margin: 0, color: '#06437c' }}>Verify your email account</h1>
                            <Typography variant='caption'>A one-time password has been sent to your registered email.</Typography>
                        </Grid>
                        <Grid className={classes.otpBox}>
                        {otp.map((data, index) => {
                            return (
                                <input
                                    className="otp-field"
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                        })}
                        </Grid>
                        <Typography className={classes.otpEntered}>
                            Entered OTP - {otp.join("")}
                        </Typography>
                        <Typography className={classes.otpButtons}>
                            <Button
                                type='submit'
                                color='primary'
                                variant='contained'
                                className={classes.clearButton}
                                onClick={e => setOtp([...otp.map(v => "")])}
                            >
                                Clear
                            </Button>
                            <Button
                                type='submit'
                                color='primary'
                                variant='contained'
                                onClick={() => emailVerification()}
                            >
                                Verify OTP
                            </Button>
                        </Typography>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default OTPBox;
