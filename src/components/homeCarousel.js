import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Hidden from '@material-ui/core/Hidden';
import carouselStyle from '../styles/carouselStyle'
import withStyles from '@material-ui/core/styles/withStyles';
import mockup01 from '../assets/images/mockup01.png';
import mockup02 from '../assets/images/mockup02.png';
import mockup03 from '../assets/images/mockup03.png';

const imgSources = [{src: mockup01, alt: 'mockup01'}, {src: mockup02, alt:'mockup02'}, {src: mockup03, alt:'mockup03'}]

class HomeCarousel extends Component{

    constructor(){
      super();
    }

    render(){

        const { classes } = this.props; 

        return(
            <Hidden only={['xs']}>
                <Carousel
                    showArrows={false} 
                    showThumbs={false} 
                    showIndicators={false} 
                    showStatus={false} 
                    autoPlay={true} 
                    interval={3000} 
                    transitionTime={2000}
                    infiniteLoop={true}
                    className={classes.carousel} 
                    >
                    {imgSources.map(i => {
                        return <div><img src={i.src} alt={i.alt} className={classes.image}/></div>
                    })}
                    
                </Carousel>
            </Hidden>
        )
    
    }
    
}

export default withStyles(carouselStyle)(HomeCarousel);
