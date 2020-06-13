import React from 'react';
import ReactDOM from 'react-dom';

// import style
import './index.css';
//import components
import Head_banner from './components/head_banner/head_banner.js'

//Import as adding components or failure to compile
import Photo_display from './components/photo_display/photo_display.js'
// import Reset_button from './components/reset_button/reset_button.js'
// import Text_display from './components/text_display/text_display.js'
// import Title_banner from'./components/title_banner/title_banner.js'

// JS File Here
//App
class App extends React.Component {
  //What will be displayed
  render(){
    return (
      <div className = "app">
        <Head_banner />
        <Photo_display />
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
