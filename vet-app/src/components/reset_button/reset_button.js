import React from 'react';
//import style
import './reset_button.css';

//Reset button will reset the text and photo to main menu to default
class Reset_button extends React.Component{
  // set state of reset button
  constructor(props){
    super(props);
    this.state = {isResetOn: true};
  }
  //change state
    activateReset(){
      this.setState(state => ({
        isResetOn: !state.isResetOn
      }));
    }
  render(){
    return(
      // Add Reset button here
      <div>
        <div className= 'reset_button'>
          <button onClick={this.activateReset}>
              Reset
          </button>
        </div>
      </div>
    );
  }
}

// create function for resetting photo_display, text_display, & title_banner to default

export default Reset_button;
