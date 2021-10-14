import React from 'react';
//import style
import './title_banner.css';
//Title banner will display the name of the step/diagnosis
//Name will change with reset button or new photo button
class Title_banner extends React.Component{
  constructor(){
    super();
    this.state={
      title_banner: 'Name of Diagnosis: '
    }
  }
  render(){
    return(
        <div className='title_banner'>{this.state.title_banner}</div>
    );
  }
}

// create function to Pull, and Display TITLE of Diagnosis
// from server about diagnosis

export default Title_banner;
