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
    const testImg = require('../images/test_porg.jpeg');
    return(
      // Add photo display
      // Test image works
      <div>
        <div className='board-row'>
          <img src={testImg} />
          <img src={testImg} />
          <img src={testImg} />
        </div>
        <div className='board-row'>
          <img src={testImg} />
          <img src={testImg} />
          <img src={testImg} />
        </div>
      </div>
    );
  }
}

// create function for image button click onClick()
  //function should change photo container to larger image
  // function should also import text_display & title_banner to call and change

export default Photo_display;
