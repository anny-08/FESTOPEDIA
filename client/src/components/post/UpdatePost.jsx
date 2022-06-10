import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize, Select, MenuItem } from '@material-ui/core';
import { AddCircle, BorderColor } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { getPost, updatePost, uploadFile } from '../../service/api';
import { useParams, useNavigate } from 'react-router-dom';


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
        marginTop: 20
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    create: {
        fontSize: 15,
        margin: 20,
        background: '#c88e51',
        color: 'white'
    },
    textArea: {
        width: '100%',
        marginTop: 10,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        },
        marginBottom: 50
    },
    dropdownCategory: {
        display: 'flex',
        width: '23%',
        marginTop: 20
    },
    dropdownBlogtype: {
        display: 'flex',
        width: '23%',
        marginTop: 30,
        marginBottom: 50
    }
}));

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'ananyaLodhi',
    usertype: 'Admin',
    category: '',
    blogtype: '',
    createdDate: new Date()
}

const UpdatePost = () => {
    const classes = useStyles();
    
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

    const url= post.picture ? post.picture : 'https://static.williampenn.net/pub/media/mageplaza/blog/post/f/p/fp.jpg';

    useEffect(() => {
        const getImage = async () => {
            if(file) {
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

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])
    
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const updateBlog = async () => {
        await updatePost(params.id, post);
        navigate(`/details/${params.id}`);
    }

    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt='cover'/>
            <FormControl className={classes.form}>
                <label htmlFor='fileInput'>
                    <AddCircle fontSize='large' color='action' cursor = 'pointer' />
                </label>
                <input
                    type="file"
                    id='fileInput'
                    style={{display : 'none'}}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                
                <InputBase 
                    name='title'
                    placeholder='Title' 
                    value={post.title} 
                    className={classes.textField}
                    onChange={(e) => handleChange(e)} 
                />
                <Button onClick={() => updateBlog()}variant='contained' className={classes.create}>UPDATE</Button>
            </FormControl>
            <Select 
                value={post.category}
                displayEmpty
                name='category'
                className={classes.dropdownCategory}
                onChange={(e) => handleChange(e)} 
            >
                <MenuItem value="" disabled>Select category for your blog post</MenuItem>
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
                name='blogtype'
                className={classes.dropdownBlogtype}
                onChange={(e) => handleChange(e)} 
            >
                <MenuItem value="" disabled>Select the type for your blog</MenuItem>
                <MenuItem value="Event">Event</MenuItem>
                <MenuItem value="Workshop">Workshop</MenuItem>
                <MenuItem value="Activity">Activity</MenuItem>
                <MenuItem value="Session">Session</MenuItem>
                <MenuItem value="Guest Lecture">Guest Lecture</MenuItem>
            </Select>
            <TextareaAutosize
                rowsMin={(7)}
                name='description'
                placeholder="Share your experience with us..."
                className={classes.textArea}
                value={post.description}
                onChange={(e) => handleChange(e)} 
            />
        </Box>
    )
}

export default UpdatePost;

//<BorderColor fontSize='large' style={{marginTop: 20}}/>