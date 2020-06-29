import React from 'react';
//import style
import './text_display.css';
//import Reset button into text component
import Reset_button from '../reset_button/reset_button.js';
import firestore from "./firestore";
//Text display will display the text and change the text based
//on which photo is clicked or if reset button is clicked
class Text_display extends React.Component{
  constructor(){}
  render(){
        const display_text ="Veterinary Web Reference Guide: Directions";
        const display_text2 ="First: Click Image of diagnosis, disease, & Medical information.";
        const display_text3 ="Second: Information about selected topic will display HERE.";
        const display_text4 ="Third: Image will expand in container above.";
        const display_text5 ="Fourth: Reset Button will reset guide including diagnosis text and image.";
    return(
        <div className='text_reset-container'>
            <br/>
            <div className ='text_display'>
              {display_text}
              <br/><br/>
              {display_text2}
              <br/><br/>
              {display_text3}
              <br/><br/>
              {display_text4}
              <br/><br/>
            </div>
            <br/>
          <div clasName ='reset_button'><Reset_button /></div>
        </div>
    );
  }
}

// create function to Pull, and Display text from server about diagnosis

export default Text_display;
