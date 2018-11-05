import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import background from '../assets/images/background-log.jpg'

class Login extends Component{

  constructor(){
    super();
  }

  render(){

    return(
        <div>
             <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Paper>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={background}/>
                </Grid>
            </Grid>
        </div>
    )
  }
}

 export default Login;