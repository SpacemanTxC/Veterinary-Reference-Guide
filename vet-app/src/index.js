import React from 'react';
import ReactDOM from 'react-dom';

// import style
import './index.css';
//import components
import 'components/head_banner/head_banner.js'
import 'components/photo_display/photo_display.js'
import 'components/reset_button/reset_button.js'
import 'components/text_display/text_display.js'
import 'components/title_banner/title_banner.js'



// JS File Here
//Link all Components

//App
class App extends React.Component {

  //What will be displayed
  render(){
    return (
      <div className = "app">
        <h1>Veterinary App</h1>
      </div>
    )
  }
}

// Add Steps Comments
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
