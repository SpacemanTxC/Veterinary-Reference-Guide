import React from 'react';
//import style
import './photo_display.css';

// Photo app will display photos to be used as buttons
// Phot app will display the main photo when clicked
class Photo_display extends React.Component{
  //function to click image to change display
  // renderImg(i){
  //   return(
  //     onClick ={}
  //   );
  // }

  render(){
    // add function to get photo from db
    const vetCPR = require('../images/vet_cpr.jpg');
    const tapeWormImg =require('../images/tapeworm.jpg');
    const whipWormImg =require('../images/whipworm.jpg');
    const roundWormImg =require('../images/roundworm.jpg');
    const coccidiaImg =require('../images/coccidia.jpg');
    const hookWormImg =require('../images/hookworm.jpg');
    // const image6 =require('../images/');

    return(
      // Add photo display
      // Test image works
      <div className='image-row'>
        <div className='board-row'>
          <img src={vetCPR} />
          <img src={tapeWormImg} />
        </div>
        <div className='board-row'>
          <img src={whipWormImg} />
          <img src={roundWormImg} />
        </div>
        <div className='board-row'>
          <img src={coccidiaImg} />
          <img src={hookWormImg} />
        </div>
      </div>
    );
  }
}

// create function for image button click onClick()
  //function should change photo container to larger image
  // function should also import text_display & title_banner to call and change

export default Photo_display;
