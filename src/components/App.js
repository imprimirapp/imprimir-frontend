import React, { Component } from 'react';
import HomeCarousel from './homeCarousel';
import TransparentToolbar from './transparentToolbar'
import HomeText from './homeText'


class App extends Component{

  constructor(){
    super();
  }

  render(){

    return(
        <div>
            <TransparentToolbar />
            <HomeText />
            <HomeCarousel />
        </div>
    )
  }
}

 export default App;