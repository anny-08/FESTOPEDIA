import Carousel from 'react-material-ui-carousel';
import { aboutUsCarouselData } from '../../constants/aboutUsCarouselData';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    carouselDimensions: {
        width: '100%',
        height: 530,
        //marginRight: 20,
        marginTop: 20,
    }
})

const AboutUsCarousel = () => {
    const classes = useStyles();
    return (
        <Carousel 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
        >  
        {
            aboutUsCarouselData.map( image => (
                <img src = {image} className={classes.carouselDimensions} alt='cover'/>
            ))
        }
        </Carousel>
    )
}

export default AboutUsCarousel;