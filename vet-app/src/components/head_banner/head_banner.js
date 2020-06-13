import React from 'react';
//import style
import './head_banner.css'

//Head banner will display the banner at the top of the app
class Head_banner extends React.Component{
  render(){
    const head_banner = 'Veterinary Reference Guide';
      return(
        <div className='head_banner'>
          {head_banner}
        </div>
    );
  }
}

export default Head_banner;
