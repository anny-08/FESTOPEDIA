import React from 'react';
import logos from './assets/logos.jpg';
import corona from './assets/corona.jpeg';
import innovacation from './assets/innovacation.jpg';
import wappers from './assets/wappers.jpg';
import aayam from './assets/aayam.jpg';
import ananya from './assets/ananya.jpg';
import isha from './assets/isha.png';
import himanshi from './assets/himanshi.jpeg';
import { Grid, Typography, makeStyles, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    containerBox: {
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignContent: 'space-evenly',
        alignItems: 'center',
        background: '#746f84',//'#322b49', //'#044261',
    },
    root: {
        //border: `1.2px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(2),
        margin: 20,
        borderRadius: '3px',
        maxWidth: 350,
        height: 300,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        background: '#eeeeee',
        border: 'solid 6px #cccccc'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: '50%',
        border: '2px solid #c5c2c2',
        marginBottom: theme.spacing(2)
    },
    clubName: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    clubDescription: {
        marginBottom: theme.spacing(1),
        fontSize: 15,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    followButton: {
        textTransform: 'none',
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: 17, 
        background: '#5f5877',
        marginTop: 25
    },
    smallScreenFont: {
        fontSize: 22,
        marginTop: 60,
        color: '#dfe3e7',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        },
    },
    followOptions: {
        fontSize: 40,
        color: '#dfe3e7',
        cursor: 'pointer',
        padding: 5,
        textDecoration: 'none',
        display: 'inline-block',
        //alignItems: 'center',
        //justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        }
    },
    followBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    teamSection: {
        width: '100%'
    },
    container: {
        width: '80%',
        margin: 'auto'
    },
    row: {
        width: '60%',
        margin: 'auto'
    },
    title: {
        textAlign: 'center',
        marginTop: 45,
        '& > h1': {
            color: '#acc3d8',
            fontSize: 35,
            letterSpacing: 7.5
        },
        '& > p': {
            color: '#ffffff',
            margin: '30px 0px'
        }
    },
    teamCard: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 40,
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr',
        }
    },
    card: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#c5c3c3', //'#0a7187', //'#79969c', //'#6a98a1', //'#eeeeee',
        marginBottom: 40,
        border: '6px solid #d2e7eb',
        //cursor: 'pointer'
    },
    imageSection: {
        height: 150,
        width: 150,
        borderRadius: '50%',
        border: '6px solid #8a8d8f',  //#c5c2c2
    },
    content: {
        width: '100%',
        '& > h3': {
            fontSize: 27,
            textAlign: 'center',
            letterSpacing: 1.5,
            color: '#073763'
        },
        '& > h4': {
            fontSize: 17,
            textAlign: 'center',
            letterSpacing: 1.5,
            color: '#044261'
        },
    },
    /*topImage: {
        background: `url(${'https://cdn.openpr.com/R/2/R21492566_g.jpg'}) center/55% repeat-x #000`,
    }*/
    imageText: {
        height: 280,
        textAlign: 'center',
        paddingTop: 35,
        opacity: 0.9,
        marginBottom: 30,
        color: '#ffffff',
        background: `url(${'https://cdn.openpr.com/R/2/R21492566_g.jpg'}) center/70% repeat-x #000`,
    },
    adminDescription: {
        marginBottom: theme.spacing(1),
        fontSize: 18,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    }
}))

const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Grid style={{ background: '#251e39' }}>
                <Typography>
                    <Typography style={{ color: '#dfe3e7', textAlign: 'center', fontSize: 40, fontWeight: 600, letterSpacing: 7.5, marginBottom: 10 }}>OUR CLUBS</Typography>
                    <Typography className={classes.imageText}></Typography>
                </Typography>
                <Grid container className={classes.containerBox}>
                    <Grid item lg={4} sm={6} xs={12} direction='column' className={classes.root}>
                        <img src={logos} alt='cover' className={classes.image} />
                        <Typography variant="body2" className={classes.clubName}>Logos</Typography>
                        <Typography className={classes.clubDescription} color='textSecondary' variant='caption'>From origination to oration.</Typography>
                        <Typography color='textSecondary' variant='caption'>logos.debsoc@gmail.com</Typography>
                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                            <a href='https://www.instagram.com/logos_bv/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Follow</a>
                        </Button>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12} direction='column' className={classes.root}>
                        <img src={corona} alt='cover' className={classes.image} />
                        <Typography variant="body2" className={classes.clubName}>Corona</Typography>
                        <Typography className={classes.clubDescription} color='textSecondary' variant='caption'>Imagination to innovation.</Typography>
                        <Typography color='textSecondary' variant='caption'>corona.banasthali@gmail.com</Typography>
                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                            <a href='https://www.instagram.com/team__corona/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Follow</a>
                        </Button>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12} direction='column' className={classes.root}>
                        <img src={innovacation} alt='cover' className={classes.image} />
                        <Typography variant="body2" className={classes.clubName}>Innovacation</Typography>
                        <Typography className={classes.clubDescription} color='textSecondary' variant='caption'>Igniting innovation.</Typography>
                        <Typography color='textSecondary' variant='caption'>tinnovacation@gmail.com</Typography>
                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                            <a href='https://www.instagram.com/team_innovacation/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Follow</a>
                        </Button>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12} direction='column' className={classes.root}>
                        <img src={aayam} alt='cover' className={classes.image} />
                        <Typography variant="body2" className={classes.clubName}>Aayam</Typography>
                        <Typography className={classes.clubDescription} color='textSecondary' variant='caption'>I think, therefore I am.</Typography>
                        <Typography color='textSecondary' variant='caption'>aayambanasthali@gmail.com</Typography>
                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                            <a href='https://www.instagram.com/aayam_i_think_therefore_i_am/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Follow</a>
                        </Button>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12} direction='column' className={classes.root}>
                        <img src={wappers} alt='cover' className={classes.image} />
                        <Typography variant="body2" className={classes.clubName}>Wappers</Typography>
                        <Typography className={classes.clubDescription} color='textSecondary' variant='caption'>DREAM * DEVELOP * DEBUG</Typography>
                        <Typography color='textSecondary' variant='caption'>banasthali.codechef@gmail.com</Typography>
                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                            <a href='https://www.instagram.com/bu_coders/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Follow</a>
                        </Button>
                    </Grid>
                </Grid>
                <html>
                    <body>
                        <div className={classes.teamSection}>
                            <div className={classes.container}>
                                <div className={classes.row}>
                                    <div className={classes.title}>
                                        <h1>CONTACT US</h1>
                                        <p>If there are any issues related to the website, the contact details of the admins are provided below. In case there’s a delay in reverting back, we request you to wait for some time. We will try to reach out to you at the earliest.</p>
                                    </div>
                                </div>
                                <div className={classes.teamCard}>
                                    <div className={classes.card}>
                                        <div>
                                            <img src={ananya} alt="Not found!" className={classes.imageSection} />
                                        </div>
                                        <div className={classes.content}>
                                            <h3>Ananya Lodhi</h3>
                                            <h4>B.Tech (CS), VI Semester</h4>
                                            
                                        </div>
                                        <Typography className={classes.adminDescription} color='textSecondary' variant='caption'>ananyalodhi17@gmail.com</Typography>
                                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                                            <a href='https://www.instagram.com/ananya.l17/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a>
                                        </Button>
                                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                                            <a href='https://www.linkedin.com/in/ananya-lodhi-495230192/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>LinkedIn</a>
                                        </Button>
                                    </div>
                                    <div className={classes.card}>
                                        <div>
                                            <img src={himanshi} alt="Not found!" className={classes.imageSection} />
                                        </div>
                                        <div className={classes.content}>
                                            <h3>Himanshi Tyagi</h3>
                                            <h4>B.Tech (CS), VI Semester</h4>
                                            
                                        </div>
                                        <Typography className={classes.adminDescription} color='textSecondary' variant='caption'>himanshi.tyagi17@gmail.com</Typography>
                                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                                            <a href='https://www.instagram.com/himanshi_tyagi17/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a>
                                        </Button>
                                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                                            <a href='https://www.linkedin.com/in/himanshi-tyagi-4185521ab/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>LinkedIn</a>
                                        </Button>
                                    </div>
                                    <div className={classes.card}>
                                        <div>
                                            <img src={isha} alt="Not found!" className={classes.imageSection} />
                                        </div>
                                        <div className={classes.content}>
                                            <h3>Isha Mudgal</h3>
                                            <h4>B.Tech (CS), VI Semester</h4>
                                            
                                        </div>
                                        <Typography className={classes.adminDescription} color='textSecondary' variant='caption'>isha2000mudgal@gmail.com</Typography>
                                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                                            <a href='https://www.instagram.com/isha.mudgal/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a>
                                        </Button>
                                        <Button className={classes.followButton} disableElevation color='primary' variant='contained' size='small'>
                                            <a href=' https://www.linkedin.com/in/isha-mudgal-348232192/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>LinkedIn</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>
                <Typography style={{ marginTop: 30, padding: 30, background: ' 	#d1d0c1', fontStyle: 'italic' }}>All the rights of this website are reserved by the admins. No content on the page is written in order to condemn any person in particular. All the posts have been created with the sole purpose of sharing information. For any doubts/queries, you can contact the admins anytime. </Typography>
                <Typography className={classes.smallScreenFont}>FOLLOW US:</Typography>
                <Grid className={classes.followBox}>
                    <a className={classes.followOptions} href='https://www.linkedin.com/school/banasthali-vidyapith/?originalSubdomain=in' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-linkedin"></i></a>
                    <a className={classes.followOptions} href='https://twitter.com/banasthali_vid' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-twitter-square"></i></a>
                    <a className={classes.followOptions} href='https://www.facebook.com/banasthali.org/' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-facebook-square"></i></a>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact;