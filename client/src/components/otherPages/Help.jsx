import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import homePage1 from './assets/homePage1.png';
import register from './assets/register.png';
import login from './assets/login.png';
import homePage2 from './assets/homePage2.png';
import createPost from './assets/createPost.png';
import viewPost from './assets/viewPost.png';
import updatePost from './assets/updatePost.png';
import aboutUs from './assets/aboutUs.png';
import contact from './assets/contact.png';

const useStyles = makeStyles((theme) => ({
    img1: {
        height: '100%',
        width: '100%'
    },
    container: {
        marginTop: '2%',
        padding: '3%',
        background: '#ffffff',
    },
    imgContainer: {
        marginTop: '2%',
        background: '#ffffff',
    },
    heading: {
        fontSize: 37, 
        background: '#d9d2e9',
        textAlign: 'center',
        fontWeight: 600,
        color: '#16173c',
        letterSpacing: 1.5,
    }, 
}))

const Help = () => {
    const classes = useStyles();
    return (
        <>
            <Box style={{ background: '#251e39' }}>
                <Typography className={classes.heading}>A Guide Through Festopedia</Typography>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography><span style={{fontWeight: 600}}>Festopedia</span> is a blog-website which aims towards providing a common platform to the Banasthali community for information exchange regarding all the glorious fests that happen to take place in the campus and celebrate their cause of being. 
                            <Typography display="block">This is the place where students and professors can share their experiences, clubs’ core team members can update the students about their upcoming events, workshops, guest lectures, etc., and from where professors can also get to know the whereabouts and the happenings going on in the campus.</Typography>
                            <Typography style={{marginTop: '2%'}}>The adjacent picture displays the <span style={{fontWeight: 600}}>Home</span> page of Festopedia as it would appear to a user who hasn't yet registered to the website.</Typography>
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={homePage1} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography>A user needs to get himself/herself registered to the website in order to avail the privileges of Festopedia. Only Banasthali Vidyapith's students, professors and clubs' core team leaders are allowed to create their accounts on the website.
                            <Typography style={{marginTop: '4%'}} display="block">The adjacent picture shows the <span style={{fontWeight: 600}}>Register</span> form of the website.</Typography>
                            <Typography style={{marginTop: '4%'}}>The form asks the users to:</Typography>
                            <Typography display="block">1. Create a username for their account. They should enter their full name in this field.</Typography>
                            <Typography display="block">2. Enter their official Banasthali email ID provided to them by Banasthali Vidyapith. Email IDs of other domains will not be entertained.</Typography>
                            <Typography display="block">3. Create a password for their account.</Typography>
                            <Typography display="block">4. Select the user-type for their account, i.e., Admin, Student, Professor, or Club Leader</Typography>
                            <Typography style={{marginTop: '4%'}}>Once all the details have been correctly filled, they can click on the <span style={{fontWeight: 600}}>SUBMIT</span> button to further verify their email ID, and thus, register themselves on Festopdeia.</Typography>
                            <Typography style={{marginTop: '4%'}}><span style={{fontWeight: 600}}>Note: </span>All the fields are mandatory to be filled.</Typography>
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={register} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                    <Typography>Once the user verifies his/her official Banasthali email ID, and successfully registers to the website, he/she can now login to avail all the privileges of Festopedia. 
                            <Typography style={{marginTop: '4%'}} display="block">The adjacent picture shows the <span style={{fontWeight: 600}}>Login</span> form of the website.</Typography>
                            <Typography style={{marginTop: '4%'}}>The form asks the users to:</Typography>
                            <Typography display="block">1. Enter the username they created for their account while registering to Festopedia.</Typography>
                            <Typography display="block">2. Enter the password they created for their account while registering to Festopedia.</Typography>
                            <Typography style={{marginTop: '4%'}}>Once all the details have been correctly filled, they can click on the <span style={{fontWeight: 600}}>LOG IN</span> button to enter their account on Festopedia.</Typography>
                            <Typography style={{marginTop: '4%'}}><span style={{fontWeight: 600}}>Note: </span>All the fields are mandatory to be filled.</Typography>
                            <Typography style={{marginTop: '4%'}}>In case a user forgets his/her password, he/she can click on the <span style={{fontWeight: 600}}>Forgot password?</span> link to further proceed with the process of resetting the account's password.</Typography>
                    </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={login} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography>Once the user successfully logs in to his/her account, he/she gets access to all the functionalities of Festopedia. </Typography>
                        <Typography style={{marginTop: '4%'}}>A user can:</Typography>
                        <Typography display="block">1. Create a new blog or share his/her experience by clicking on the <span style={{fontWeight: 600}}>CREATE NEW BLOG</span> button (that appears on the left in orange color) or <span style={{fontWeight: 600}}>WRITE</span> section (that appears on the header towards the end). </Typography>
                        <Typography display="block">2. Search existing blogs by categories and blog types.</Typography>
                        <Typography display="block">3. Make comments on all the existing posts.</Typography>
                        <Typography display="block">4. Read all the existing blog posts.</Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={homePage2} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography>If a user wishes to share his/her story, he/she will be directed to a page that would ask to:</Typography>
                        <Typography display="block">1. Select a picture for the blog post by clicking on the plus sign.</Typography>
                        <Typography display="block">2. Give a title to the blog post.</Typography>
                        <Typography display="block">3. Select a category to which the experience is associated.</Typography>
                        <Typography display="block">4. Select a blog-type to which the experience is associated.</Typography>
                        <Typography display="block">5. Write a description.</Typography>
                        <Typography style={{marginTop: '4%'}}>Once all the fields have been filled to the user's satisfaction, he/she can hit the <span style={{fontWeight: 600}}>PUBLISH</span> button to see the blog post appear on the Home page of Festopedia.</Typography>
                        <Typography style={{marginTop: '4%'}}><span style={{fontWeight: 600}}>Note: </span>All the fields are mandatory to be filled, <span style={{fontWeight: 600}}>except</span> selecting a picture. If a user doesn't select a picture, a default image would appear with the main blog post.</Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={createPost} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography>Once a user has successfully written and posted his/her blog, it would start appearing on the Home page of Festopedia.
                        <Typography display="block" style={{marginTop: '4%'}}>If the user clicks on it, he/she would get to see all the related details of the blog post, namely, <span style={{fontWeight: 600}}>Author, Designation, Title, Category, Blog Type, Date, Description</span>, and the comments (if any).</Typography>
                        <Typography display="block" style={{marginTop: '4%'}}>If a user wishes to update or delete his/her blog post, he/she can do so by clicking the <span style={{fontWeight: 600}}>Edit</span> (in grey) or <span style={{fontWeight: 600}}>Delete</span> (in red) icon, respectively, that appear below the picture of the blog post.</Typography>
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={viewPost} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                    <Typography>If a user wishes to update his/her blog post, he/she will be directed to a page that would ask if the user wants to:</Typography>
                        <Typography display="block">1. Update the picture for the blog post.</Typography>
                        <Typography display="block">2. Update the title of the blog post.</Typography>
                        <Typography display="block">3. Update the category to which the experience is associated.</Typography>
                        <Typography display="block">4. Update the blog-type to which the experience is associated.</Typography>
                        <Typography display="block">5. Update the description.</Typography>
                        <Typography style={{marginTop: '4%'}}>Once the user has satisfactorily updated his/her blog post, he/she can hit the <span style={{fontWeight: 600}}>UPDATE</span> button to see the updated blog post appear on the Home page of Festopedia.</Typography>
                        <Typography style={{marginTop: '4%'}}><span style={{fontWeight: 600}}>Note: </span><span style={{fontWeight: 600}}>Not</span> all the fields are mandatory to be updated.</Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={updatePost} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography>The <span style={{fontWeight: 600}}>About Us</span> page of Festopedia provides the users with a brief description of Banasthali Vidyapith, describing how truly it's a <span style={{fontWeight: 600}}>University for Women: University with a Difference.</span>
                        <Typography display="block" style={{marginTop: '4%'}}>The page then showcases some of the greatest historic and academic achievements of Banasthali Vidyapith, followed by the purpose behind developing and maintaining the Festopedia blog-website.</Typography> 
                        <Typography display="block" style={{marginTop: '4%'}}>Lastly, an inter-team, personalized introduction to the contributors (Admin) of the website has been given.</Typography>
                        </Typography>
                    </Grid>
                    <Grid item llg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={aboutUs} alt="Not found!" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6} xs={12} md={6} className={classes.container}>
                        <Typography>The <span style={{fontWeight: 600}}>Contact</span> page of Festopedia provides the users with all the necessary details and social media handles of the clubs of Banasthali Vidyapith that fall under the Department of Computer Science (aka Aim and Act), namely, <span style={{fontWeight: 600}}>Logos, Corona, Innovacation, Aayam and Wappers</span>. </Typography> 
                        <Typography display="block" style={{marginTop: '4%'}}>Admin details have also been provided on this page. In case of any query/suggestion, do reach out to them. The contributors to Festopedia are: </Typography>
                        <Typography display="block" style={{fontWeight: 600}}>1. Ananya Lodhi</Typography>
                        <Typography display="block" style={{fontWeight: 600}}>2. Himanshi Tyagi</Typography>
                        <Typography display="block" style={{fontWeight: 600}}>3. Isha Mudgal</Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} className={classes.imgContainer}>
                        <img className={classes.img1} src={contact} alt="Not found!" />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Help;