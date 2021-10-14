import React from 'react';
//import style
import './photo_display.css';

// new to be local for component
let vetCPRRef = require('../images/vet_cpr.jpg');
let tapeWormImgRef = require('../images/tapeworm.jpg');
let whipWormImgRef = require('../images/whipworm.jpg');
let roundWormImgRef = require('../images/roundworm.jpg');
let coccidiaImgRef = require('../images/coccidia.jpg');
let hookWormImgRef = require('../images/hookworm.jpg');
// Photo app will display photos to be used as buttons
// Phot app will display the main photo when clicked
class Photo_display extends React.Component{
  //function to click image to change display
  //componentDidMount use to set new state on click
  constructor(){
    super();
    this.state={
      vetCPR: vetCPRRef,
      tapeWormImg: tapeWormImgRef,
      whipWormImg: whipWormImgRef,
      roundWormImg: roundWormImgRef,
      coccidiaImg: coccidiaImgRef,
      hookWormImg: hookWormImgRef
    }
  }
  render(){
    // add function to get photo from db
    return(
      // Add photo display
      // Test image works
      <div className='image-row'>
        <div className='board-row'>
          <img src={this.state.vetCPR} />
          <img src={this.state.tapeWormImg} />
        </div>
        <div className='board-row'>
          <img src={this.state.whipWormImg} />
          <img src={this.state.roundWormImg} />
        </div>
        <div className='board-row'>
          <img src={this.state.coccidiaImg} />
          <img src={this.state.hookWormImg} />
        </div>
      </div>
    );
  }
}

// create function for image button click onClick()
  //function should change photo container to larger image
  // function should also import text_display & title_banner to call and change

export default Photo_display;
