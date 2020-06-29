import React from 'react';
//import style
import './text_display.css';
//import Reset button into text component
import Reset_button from '../reset_button/reset_button.js';
//Text display will display the text and change the text based
//on which photo is clicked or if reset button is clicked
import * as firebase from 'firebase';
// import config from '../firebase/firebase.js';
class Text_display extends React.Component{
  //sets starting state
  constructor(){
    super();
    this.state ={
      display_text: "Veterinary Web Reference Guide: Directions",
      display_text2: "First: Click Image of diagnosis, disease, & Medical information.",
      display_text3:"Second: Information about selected topic will display HERE.",
      display_text4:"Third: Image will expand in container above.",
      display_text5:"Fourth: Reset Button will reset guide including diagnosis text and image."
    }
  }
  //will change the render
  // componentDidMount(){
  //   set listner her
  //   const rootRef = firebase.datebase().ref().child('')
  //   const displayRef = rootRef.where('cpr_steps', '==', '');
  //   console.log(rootRef);
  //     displayRef.on('value')
  // }
  render(){

    return(
      <div className='text_reset-container'>
          <br/>
          <div className ='text_display'>
            {this.state.display_text}
            <br/><br/>
            {this.state.display_text2}
            <br/><br/>
            {this.state.display_text3}
            <br/><br/>
            {this.state.display_text4}
            <br/><br/>
            {this.state.display_text5}
          </div>
          <br/>
        <div clasName ='reset_button'><Reset_button /></div>
      </div>
    );
  }
}
// create function to Pull, and Display text from server about diagnosis

export default Text_display;
