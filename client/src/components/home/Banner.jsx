import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
        background: `url(${'https://dropoutentertainment.ca/wp-content/uploads/2019/06/MusicCrowd.jpg'}) center/55% repeat-x #000`,
        height: '59vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 78,
            color: '#522d06', //'white',
            fontWeight: 'bold',
            background: '#f3bd84', //#f3c99d', //'#dfaf7d'
            lineHeight: 1,
        },
        '& :last-child': {
            fontSize: 24,
            background: '#ffe1c3',
            margin: 15
        }
    }
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.image}>
            <Typography>
                FESTOPEDIA
            </Typography>
            <Typography>
                Blogs.Bliss.Banasthali
            </Typography>
        </Box>
    );
}

export default Banner;