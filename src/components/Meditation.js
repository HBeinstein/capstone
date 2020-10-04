import React, { useState } from 'react';
import Scene from './Scene';
import { database } from '../firebase';
// require('firebase/database');
import './../assets/css/animation.css'

function Meditation() {
  const [view, setView] = useState('startMeditation');

  //READ data from db, updates on change in value, changes view to render scene
  function getData() {
    let zAxisVal = database.ref('accelerometerData/');
    console.log(zAxisVal);

    zAxisVal.on('value', function(snapshot) {
      console.log(snapshot.val());
    });

    setView('meditation');
  }

  //Switch view back to start meditation screen
  function endMeditation(){
    setView('startMeditation');
  }

  //Decide which view to render
  if(view === "meditation") {
    return (
      <React.Fragment>
        <Scene />
        <button onClick={endMeditation}>End Meditation</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Meditation Page</h3>
        <button onClick={getData}>Start Meditation</button>
      </React.Fragment>
    );
  }
}

export default Meditation;