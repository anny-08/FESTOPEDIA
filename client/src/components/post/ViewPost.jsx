import { Box, makeStyles, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { getPost, deletePost, updatePost } from '../../service/api';
import Comments from '../comments/Comments';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 70px',
        [theme.breakpoints.down('md')]: {
            padding: 10
        },
        marginBottom: 50
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right',
        cursor: 'pointer'
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '30px 0 10px 0',
        color: '#20124d'
    },
    subtitle: {
        fontSize: 18,
        color: "#878787",
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            '& > *': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 4
            }
        }
    },
    description: {
        marginTop: '4%',
        color: '#1c0101'
    }, 
    comments: {
        color: "#878787",
        display: 'flex',
        margin: '20px 0',
        fontSize: 18
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

const PostView = () => {
    const classes = useStyles();
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [userData, setUserData] = useState();
    const location = useLocation();
    const callPost = async () => {
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
        callPost();
    }, []);


    const url = 'https://indiachronicles.com/wp-content/uploads/2016/02/palate-mini-2016-800x400.jpg';

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])
    
    const deleteBlog = async () => {
        if(!userData){
            window.alert("Kindly register first!");
            navigate('/login');
        }        
        else  if(userData.u_name==post.username){
            await deletePost(post._id);
            navigate('/');
        }

        else{
            window.alert("You can't delete other's post!");
        }
    }
    const editBlog = async () => {
        if(!userData){
            window.alert("Kindly register first!");
            navigate('/login');
        }
        else if(userData.u_name==post.username){
            navigate(`/update/${post._id}`)
            await updatePost(post._id, post );
         }
        else{
            window.alert("You can't update other's post!");
        }
    }

    return (
        
        <Box className={classes.container}>
            <img src={post.picture || url} alt="cover" className={classes.image} />
            <Box className={classes.icons}>
            
            {/* <Link to={`/update/${post._id}`} >  */}
            <Edit 
            onClick = {()=> editBlog()}
            className={classes.icon} color='primary'/>
            {/* </Link> */}
               
                <Delete 
                    onClick = {() => deleteBlog()}
                    className={classes.icon} 
                    color='error'
                />
            </Box> 
            <Typography className={classes.title}>{post.title}</Typography>
            <Box className={classes.subtitle}>
            <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography style={{fontSize: 18}}>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto', fontSize: 18}}>Designation: <span style={{fontWeight: 600}}>{post.usertype}</span></Typography>
                <Typography style={{marginLeft: 'auto', fontSize: 18}}>Category: <span style={{fontWeight: 600}}>{post.category}</span></Typography>
                <Typography style={{marginLeft: 'auto', fontSize: 18}}>Blog Type: <span style={{fontWeight: 600}}>{post.blogtype}</span></Typography>
                <Typography style={{marginLeft: 'auto', fontSize: 18}}>Date: <span style={{fontWeight: 600}}>{new Date(post.createdDate).toDateString()}</span></Typography>
            </Box>
            <Typography className={classes.description}>{post.description}</Typography>
            <Box>
                <Comments post={post}/>
            </Box>
        </Box>
    )
}

export default PostView;

//<Typography className={classes.comments}>Comments: </Typography>