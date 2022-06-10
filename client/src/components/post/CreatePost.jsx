import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize, Select, MenuItem } from '@material-ui/core';
import { AddCircle, BorderColor } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { createPost, uploadFile } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 70px',
        [theme.breakpoints.down('md')]: {
            padding: 10
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover',
        borderRadius: 10
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    create: {
        fontSize: 17,
        margin: 20,
        background: '#c88e51',
        color: 'white'
    },
    textArea: {
        width: '100%',
        marginBottom: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    dropdownCategory: {
        display: 'flex',
        width: '21%',
        marginTop: 20
    },
    dropdownBlogtype: {
        display: 'flex',
        width: '21%',
        marginTop: 30,
        marginBottom: 50
    }
}));


const CreatePost = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [userData, setUserData] = useState();

    const callCreatePost = async () => {
        try {
            const response = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            console.log(data.u_name);
            setUserData(data);

            if (!response.status === 200) {
                const error = new Error(response.error);
                throw error;
            }
            
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }

    useEffect(() => {
        callCreatePost();
    }, []);

    let initialPost = {
        title: '',
        description: '',
        picture: '',
        username: '',
        usertype: '',
        category: '',
        blogtype: '',
        createdDate: new Date()
    }


    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

    const url = post.picture ? post.picture : 'https://static.williampenn.net/pub/media/mageplaza/blog/post/f/p/fp.jpg';

    const handleChange = (e) => {
        //setPost({ ...post, [e.target.name]: e.target.value });

        //changes made...
        const name= e.target.name;
        const value=  e.target.value;
        setPost({
            ...post,
            //title: e.target.value,
            //description: e.target.value,
            //picture: e.target.value,
            username: userData.u_name,  //Perfect
            usertype: userData.ut_name,   //Perfect
            //category: e.target.value,
            //blogtype: e.target.value
            [name] : value
        });
        //...till here and then below where 'value' has been added.
        
    }

    const savePost = async () => {
        await createPost(post);
        navigate('/');
        //history.push('/');
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    }, [file])
 
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt='cover' />
            <FormControl className={classes.form} method="GET">
                <label htmlFor='fileInput'>
                    <AddCircle fontSize='large' color='action' cursor = 'pointer' />
                </label>
                <input
                    type="file"
                    id='fileInput'
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />


                <InputBase
                    onChange={ handleChange }
                    name='title'
                    value={ post.title }
                    placeholder='Title'
                    className={classes.textField}
                />
                <Button onClick={() => savePost()} variant='contained' className={classes.create}>PUBLISH</Button>
            </FormControl>
            <Select
                value={ post.category }
                displayEmpty
                onChange={ handleChange }
                name='category'
                className={classes.dropdownCategory}
            >
                <MenuItem value="" disabled>Select a category for your blog post</MenuItem>
                <MenuItem value="Apaji">Apaji</MenuItem>
                <MenuItem value="Mayukh">Mayukh</MenuItem>
                <MenuItem value="Logos">Logos</MenuItem>
                <MenuItem value="Innovacation">Innovacation</MenuItem>
                <MenuItem value="Corona">Corona</MenuItem>
                <MenuItem value="Aayam">Aayam</MenuItem>
                <MenuItem value="Wappers">Wappers</MenuItem>
            </Select>
            <Select
                value={post.blogtype}
                displayEmpty
                onChange={ handleChange }
                name='blogtype'
                className={classes.dropdownBlogtype}
            >
                <MenuItem value="" disabled>Select a blog-type for your post </MenuItem>
                <MenuItem value="Event">Event</MenuItem>
                <MenuItem value="Workshop">Workshop</MenuItem>
                <MenuItem value="Activity">Activity</MenuItem>
                <MenuItem value="Session">Session</MenuItem>
                <MenuItem value="Guest Lecture">Guest Lecture</MenuItem>
            </Select>
            <TextareaAutosize
                rowsMin={(7)}
                placeholder="Share your experience with us..."
                className={classes.textArea}
                onChange={handleChange}
                name='description'
                value={post.description}
            />
        </Box>
    )
}

export default CreatePost;
//<BorderColor fontSize='large' style={{marginTop: 10}}/>