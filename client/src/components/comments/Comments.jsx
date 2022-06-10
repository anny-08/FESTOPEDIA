import { useState, useEffect } from 'react';
import { Box, Button, TextareaAutosize, makeStyles } from '@material-ui/core'
import { newComment, getComments } from '../../service/api';
import { useNavigate } from 'react-router-dom';

import Comment from './Comment';

const useStyles = makeStyles({
    component : {
        marginTop: 50,
        display : 'flex'
    },
    textarea : {
        width: '100%',
        margin: '0 10px',
        marginTop: 5
    },
    button : {
        height: 30,
        marginTop: 7
    }
})

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}
const Comments = ({ post }) => {
    const classes = useStyles();
    const navigate = useNavigate();
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
        }
    }

    const [ comment, setComment ] = useState(initialValue);
    const [ comments, setComments ] = useState([]);
    const [ toggle, setToggle ] = useState(false);


    useEffect(() => {
        const getData = async () => {
        let response = await getComments(post._id);
        setComments(response);
        }
        getData();
    }, [post, toggle])

    const handleChange = (e) => {
            callComment();
            setComment({
                ...comment,
                name: userData.u_name,
                postId: post._id,
                comments: e.target.value
            })   
    }

    const postComment = async () => {
       
        if(!userData){
            window.alert("Kindly register first!");
            navigate('/login');
        }
        else{
        await newComment(comment);
        setToggle(prev => !prev);
        }
    }

    return (
        <Box >
            <Box className={classes.component}>
                
                <TextareaAutosize 
                    className={classes.textarea}
                    rowsMin={2}    
                    onChange={(e) => handleChange(e)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    onClick={() => postComment()}
                >
                    Post
                </Button>
            </Box>
            {
                comments && comments.map(comment => (
                    <Comment comment={comment} setToggle={setToggle}/>
                ))
            } 
        </Box>
    )
}

export default Comments;

//<img src={url} alt='dp' className={classes.image}/>
/*image : {
        width: 40, 
        height: 40,
        borderRadius: '50%'
    },*/
//const url = "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"