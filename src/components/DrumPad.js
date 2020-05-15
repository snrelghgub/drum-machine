import React from 'react';
//import DrumButton from './components/DrumButton.js'; 
//component for Drum Machine's drumpad 
import 'antd/dist/antd.css';
import { Button } from 'antd';



class DrumPad extends React.Component {
  constructor(props) {
    super(props);

  this.audio = React.createRef();
  }

  playSound = () => {
    this.audio.current.play(); //play current sound
    this.audio.current.currentTime=0; //allows intermittent playing
    this.props.handleDisplay(this.props.soundType); 
  }

  componentDidMount(){ 
    document.addEventListener('keydown', this.handleKeyDown ); //"keydown' eventListener on page to run script
    window.focus() //Assures that the drumkit window gets focus
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown );
  }

  handleKeyDown = e => {
    if(e.keyCode===this.props.id.charCodeAt(0)){
      this.audio.current.play(); 
      this.audio.current.currentTime=0; 
    }
  }

  render() {
    return (
      <Button type="primary" id={this.props.id} className="drum-pad" onClick={this.playSound}>{this.props.id}
        <audio ref={this.audio} id={this.props.id} src={this.props.src} className="clip"></audio>
      </Button>    
    );
  }
}

export default DrumPad;
