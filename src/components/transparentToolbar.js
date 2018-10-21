import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import toolbarStyle from '../styles/toolbarStyle'
import withStyles from '@material-ui/core/styles/withStyles';
import logo from '../assets/images/logo-web.png';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TransparentToolbar extends Component{

  constructor(){
    super();
  }

  render(){

    const { classes } = this.props; 

    return(
        <div>
            <AppBar position="fixed" className={classes.toolbar}>
                <Toolbar>
                    <div>
                        <img src={logo} className={classes.logo}/>
                    </div>
                    <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    >
                        <Button color="white" className={classes.buttonLogin}>
                        <Typography variant="body2" className={classes.typographyLogin}>
                            Iniciar Sesión
                        </Typography>
                        </Button> 
                        <Button variant="contained" className={classes.buttonSignup}>
                        <Typography variant="body2" className={classes.typography}>
                            Registrarse
                        </Typography>
                        </Button> 
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
  }
}
export default withStyles(toolbarStyle)(TransparentToolbar);