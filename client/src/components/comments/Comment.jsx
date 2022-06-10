import { Typography, Box, makeStyles } from "@material-ui/core";
import {  Delete } from '@material-ui/icons';
// import post from "../../../../server/schema/post-schema";
import { deleteComment } from '../../service/api'
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    component: {
        marginTop: 30,
        background: '#F5F5F5',
        padding: 10
    },
    container: {
        display: 'flex',
        marginBottom: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20
    },
    date: {
        marginTop: 3,
        fontSize: 14, 
        color: '#878787'
    },
    delete: {
        marginLeft: 'auto', 
        color: 'red',
        cursor: 'pointer'
    }
});

const Comment = ({ comment , setToggle}) => {
    const classes = useStyles();

    const [userData, setUserData] = useState();

    const callComment = async () => {
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
            // navigate('/login');
        }
    }

    useEffect(() => {
        callComment();
    }, []);

    const removeComment = async () => {
        if(!userData || userData.u_name!=comment.name){
            window.alert("You can't delete this comment!");
        }
        else if(userData.u_name==comment.name){
            await deleteComment(comment._id);
            setToggle(prev => !prev);
        }  
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography className={classes.name}>{comment.name}</Typography>
                <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography>
                <Delete 
                    onClick={() => removeComment()}
                    className={classes.delete}
                />
            </Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    )
}

export default Comment;