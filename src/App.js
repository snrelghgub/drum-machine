import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DrumPad from './components/DrumPad.js';
import Display from './components/Display.js';

class App extends React.Component {
	constructor(props){
		super(props)
  }

  render() {
    return (
      <div id="drum-machine">eDrumZ
        <Display/>
        <DrumPad/>
      </div>
    );
  }
}


export default App;
