import React from 'react';
import ReactDOM from 'react-dom';
// import style
import './index.css';
//import components
import Head_banner from './components/head_banner/head_banner.js'

//Import as adding components or failure to compile
import Photo_display from './components/photo_display/photo_display.js'
// import Reset_button from './components/reset_button/reset_button.js'
import Text_display from './components/text_display/text_display.js'
import Title_banner from'./components/title_banner/title_banner.js'

import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCdj8MCBZ0-eg-VQ7Q59O0srP8GH810kU8",
    authDomain: "vetapp-4e0fe.firebaseapp.com",
    databaseURL: "https://vetapp-4e0fe.firebaseio.com",
    projectId: "vetapp-4e0fe",
    storageBucket: "vetapp-4e0fe.appspot.com",
    messagingSenderId: "834830003002",
    appId: "1:834830003002:web:98ef42770f5f907b90fe03",
    measurementId: "G-Q0B3HKGP1L"
};
firebase.initializeApp(config);

// let vetapp = firebase.datebase();
//App
class App extends React.Component {
  //What will be displayed
  render(){
    return (
      <div>
        <div className = "app">
        {/*Displays head_banner component*/}
          <Head_banner />
        {/*displays photo_display component*/ }
          <Photo_display />
          <Title_banner />
          <Text_display />
        </div>
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
