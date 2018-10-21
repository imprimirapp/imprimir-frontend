import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import carouselStyle from '../styles/carouselStyle'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

class HomeText extends Component{

    constructor(){
      super();
    }

    render(){

        const { classes } = this.props; 

        return(
            <Hidden only={['xs']}>
                <div className={classes.h3Container}>
                <Typography variant="h3" className={classes.h3}>
                    Diseñado por un experto
                </Typography>
                <Typography variant="h3" className={classes.h3}>
                    y lo esperas en casa...
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Miles de diseñadores gráficos para hacer el diseño que buscas
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    o puedes realizar tu propio diseño... ¡Imprime y listo!
                </Typography>
                </div>
            </Hidden>
        )
    
    }
    
}

export default withStyles(carouselStyle)(HomeText);
