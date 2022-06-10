import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
            padding: '0 5px 5px 5px',
        },
        background : '#f8f5ec'
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    category: {
        color: '#878787',
        fontSize: 14,
        display: 'flex',
        '& > *': {
            marginLeft: 4,
            marginRight: 4
        }
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = ({post}) => {
    const classes = useStyles();
    const url = post.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHd-jxSS8lw8da6oOr3aKk_iiIhT5dyxrgYS689ltID35c4nzIGk2G3z7KzTRCyN2mP8&usqp=CAU';
    
    const addElipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }
    return (
        <Box className={classes.container}>
            <img src={url} alt="cover" className={classes.image} />
            <Box className={classes.category}>
                <Typography>{post.category}</Typography>
                <Typography>|</Typography>
                <Typography>{post.blogtype}</Typography>
            </Box>
            <Typography className={classes.title}>{addElipsis(post.title, 20)}</Typography>
            <Typography>Author: {post.username}</Typography>
            <Typography className={classes.description}>{addElipsis(post.description, 100)}</Typography>
        </Box>
    )
}

export default Post;

//<Typography>Admin</Typography>
//<Typography className={classes.text}>Event</Typography>

//<Typography>Apaji</Typography>
//<Typography>|</Typography>
//<Typography>Event</Typography>

//<Typography className={classes.title}>An evening in Apaji Fest with Ananya</Typography>
//<Typography>Author: ananyaLodhi</Typography>
//<Typography className={classes.description}>Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</Typography>

//<Box className={classes.category}>
//<Typography>{post.category}</Typography>
//<Typography>|</Typography>
//<Typography>{post.blogtype}</Typography>
//</Box>