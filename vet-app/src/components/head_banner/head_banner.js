import React from 'react';
//import style
import './head_banner.css'

//Head banner will display the banner at the top of the app
class Head_banner extends React.Component{
  constructor(){
    super();
    this.state ={
      head_banner:'Veterinary Reference Guide'
    }
  }
  render(){
      return(
        <div className='head_banner'>
          {this.state.head_banner}
        </div>
    );
  }
}

export default Head_banner;
