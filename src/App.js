import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DrumPad from './components/DrumPad.js';
import Display from './components/Display.js';


const drumkit = [
  {id:"Q", soundType:"Heater-1", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
  {id:"W", soundType:"Heater-2", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
  {id:"E", soundType:"Heater-3", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
  {id:"A", soundType:"Heater-4", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
  {id:"S", soundType:"Clap", src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
  {id:"D", soundType:"Open-HH", src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
  {id:"Z", soundType:"Kick-n'-Hat", src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
  {id:"X", soundType:"Kick", src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
  {id:"C", soundType:"Closed-HH", src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
]

class App extends React.Component {
	constructor(props){
    super(props)
    
    this.state = {
      display: "press a Key or Click", 
    }
  }

  handleDisplay = (soundType) => {
    console.log(soundType); 
    this.setState ({ 
      display: soundType, 
    }) 
  }

  render() {
    return (
      <div id="drum-machine">eDrumZ
        <Display state={this.state.display}/>
        {drumkit.map( (x) => 
            <DrumPad id={x.id} soundType={x.soundType} src={x.src} handleDisplay={this.handleDisplay}/>
        )}
      </div>
    );
  }
}


export default App;
