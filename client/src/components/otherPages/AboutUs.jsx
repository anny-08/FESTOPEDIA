import AboutUsCarousel from '../home/AboutUsCarousel';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import ananya from './assets/ananya.jpg';
import isha from './assets/isha.png';
import himanshi from './assets/himanshi.jpeg';
import im1 from './assets/image1.jpg';
import im2 from './assets/image2.jpg';
import im3 from './assets/image3.jpg';
import img1 from './assets/ach1.jpg';
import img2 from './assets/ach2.jpg';
import img3 from './assets/ach3.jpg';
import img4 from './assets/ach4.jpg';
import img5 from './assets/ach5.jpg';
import img6 from './assets/ach6.jpg';
import img7 from './assets/ach7.jpg';
import img8 from './assets/ach8.jpg';
//import img9 from './assets/ach9.jpg';
import img10 from './assets/ach10.jpg';

const useStyles = makeStyles((theme) => ({
    components: {
        paddingLeft: 100,
        paddingRight: 100,
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 50,
            paddingRight: 50,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 30,
            paddingRight: 30,
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
            paddingRight: 5,
        },
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
        marginTop: 70,
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
    imgStyle: {
        marginTop: 25,
        '& > *': {
            height: '20%',
            width: '25%',
            margin: 10,
            border: '6px solid #d2e7eb'
        }
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
    caption: {
        color: '#f7d9d9',
        fontSize: 35,
        letterSpacing: 1.5,
        marginTop: 20,
        background: '#6c284a',
        textAlign: 'center',
        width: '60%', //80 to 60
        margin: 'auto'
    },
    captionDetail: {
        color: '#d0e0e3',
        marginTop: 20,
        width: '70%',
        margin: 'auto',
        letterSpacing: 1.2,
        //background: '#688489',
        textAlign: 'center'
    },
    caption2: {
        color: '#f7d9d9',
        fontSize: 30,
        letterSpacing: 1.5,
        marginTop: 20,
        background: '#85516b',
        textAlign: 'center',
        width: '35%',
        margin: 'auto',
        fontStyle: 'italic'
    },
    achievement: {
        color: '#acc3d8',
        fontSize: 35,
        letterSpacing: 7.5,
        textAlign: 'center',
        fontWeight: 600,
        marginTop: 70
    },
    festImages: {
        marginTop: 25,
        '& > *': {
            height: '25%',
            width: '30%',
            margin: 10,
            border: '6px solid #d2e7eb'
        }
    }
}))

const AboutUs = () => {
    const classes = useStyles();
    return (
        <>
            <Box style={{ background: '#251e39' }}>
                <Box className={classes.components}>
                    <AboutUsCarousel />
                </Box>
                <Typography style={{ marginTop: 60 }}>
                    <Typography className={classes.caption}>
                        University for Women : University with a Difference
                    </Typography>
                    <Typography className={classes.captionDetail}>
                        The 'Banasthali story' has no parallel across the globe. It originated in only of its kind situation when a father lost his promising daughter before its hour and decided to train other girls the same way. Thus, Banasthali embarked upon its journey with only five students way back in 1935 when the concept of education for the girl child virtually didn't exist. With that humble beginning, today it stands as the world's largest fully residential university for women having more than 16,000 students in its sprawling 850-acre campus situated amidst rural setting in Rajasthan and having a distinct educational ideology and offering a variety of programmes from nursery up to doctoral level across a wide spectrum of disciplines to prepare enlightened citizens with  strong value-base.
                    </Typography>
                    <Typography className={classes.caption2}>
                        ये आम रास्ता नहीं है।
                    </Typography>
                </Typography>
                <Typography className={classes.achievement}>
                    HISTORIC ACHIEVEMENTS OF BANASTHALI VIDYAPITH
                </Typography>
                <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.imgStyle}>
                    <img src={img1} alt="Not found!" />
                    <img src={img2} alt="Not found!" />
                    <img src={img3} alt="Not found!" />
                    <img src={img4} alt="Not found!" />
                    <img src={img7} alt="Not found!" />
                    <img src={img6} alt="Not found!" />
                    <img src={img5} alt="Not found!" />
                    <img src={img8} alt="Not found!" />
                    <img src={img10} alt="Not found!" />
                </Grid>
                <html>
                    <body>
                        <div className={classes.teamSection}>
                            <div className={classes.row}>
                                <div className={classes.title}>
                                    <h1>OUR PURPOSE</h1>
                                    <p>Banasthali Vidyapith is not only a university but a completely different land with its own flamboyance. Hardly does anyone know about the grand fests that are conducted every year in the campus till they themselves become a part of this university. This blog website aims at placing all the fest related information together at one place so that the students, teachers, professors and any other Banasthalite can avail as well as provide the required fest related details. The fact that Banasthali caters such ambient events, they must be available for the world to witness too.</p>
                                </div>
                            </div>
                            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.festImages}>
                                <img src={im1} alt="Not found!"/>
                                <img src={im2} alt="Not found!"/>
                                <img src={im3} alt="Not found!"/>
                            </Grid>
                            <div className={classes.container}>
                                <div className={classes.row}>
                                    <div className={classes.title}>
                                        <h1>OUR TEAM</h1>
                                        <p>We , the admins of the website, are engineering students from Banasthali Vidyapith who felt it to be the need of the hour that there should be a common platform for the exchange of information regarding the grand fests of Banasthali Vidyapith. Thus, with this common goal, we joined hands to create such a website which could provide all the required details to the people both inside and outside Banasthali. We cordially invite all Banasthali students, teachers and professors to become a part of this journey of exchanging exciting experiences and information with us.</p>
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
                                            <h4>(2019-23)</h4>
                                            <p>
                                            In the words of Isha Mudgal, 
                                            <p className={classes.admins}>"Ananya Lodhi, the appropriate definition of a ‘Perfectionist’, is not only an excellent basketball player but also an artist with breath-taking skills. An all rounder, who when entrusted with any task, exhibits the zeal to strive to excel in it. She can be described as an extremely observant being who focuses on every minute detail. Her profound wisdom adds up to glorify her pious demeanour and makes her a comfortable person to work with."</p> 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={classes.card}>
                                        <div>
                                            <img src={himanshi} alt="Not found!" className={classes.imageSection} />
                                        </div>
                                        <div className={classes.content}>
                                            <h3>Himanshi Tyagi</h3>
                                            <h4>B.Tech (CS), VI Semester</h4>
                                            <h4>(2019-23)</h4>
                                            <p>
                                            In the words of Ananya Lodhi,
                                            <p className={classes.admins}>"Himanshi Tyagi is the perfect symbol of calmness and simplicity. She, with her wits has the ability to accomplish even the most difficult tasks. She is a go-getter who makes sure to leave no stone unturned. Being determined enough in life, she strives to do her best always. Even though she remains quiet most of the time, her hard work and valour shout out loud for her. The resilience with which she lives her life inspires everyone around her.  "</p> 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={classes.card}>
                                        <div>
                                            <img src={isha} alt="Not found!" className={classes.imageSection} />
                                        </div>
                                        <div className={classes.content}>
                                            <h3>Isha Mudgal</h3>
                                            <h4>B.Tech (CS), VI Semester</h4>
                                            <h4>(2019-23)</h4>
                                            <p>
                                            In the words of Himanshi Tyagi,
                                            <p className={classes.admins}>"Isha Mudgal is a perfect epitome of sincerity and infallibility. Even after being naïve for most of the time, we find her living in her own poised realm. Sometimes as impatient as sputtering mustard seeds, she is still the one who revives everything around us in her own words. She is a charismatic personality, fluttering her wings of critical expressions in the vicinity. She, with her cunning writing skills, has the ability to lift up the entire team."</p> 
                                            </p>
                                        </div>
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
            </Box>
        </>
    )
}

export default AboutUs;