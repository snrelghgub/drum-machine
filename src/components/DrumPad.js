import React from 'react';
//import DrumButton from './components/DrumButton.js'; 
//component for Drum Machine's drumpad 



class DrumPad extends React.Component {
  constructor(props) {
    super(props);

  this.audio = React.createRef();
  }

  playSound = () => {
    //console.log(this.audio.current); 
    this.audio.current.play(); //play current sound
    this.audio.current.currentTime=0; //allows intermittent playing
  }

  componentDidMount(){ 
    document.addEventListener('keydown', this.handleKeyDown ); //"keydown' eventListener to run script
  }

  componentWillUnmount(){
    //console.log("test"); 
  }

  handleKeyDown = e => {
    console.log("key press success"); 
  }

  render() {
    return (
      <button id={this.props.id} className="drum-pad" onClick={this.playSound}>{this.props.id}
        <audio ref={this.audio} id={this.props.id} src={this.props.src} className="clip"></audio>
      </button>    
    );
  }
}

export default DrumPad;
