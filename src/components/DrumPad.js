import React from 'react';


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

  handleKeyDown = e => { //play sound and handle display on key press 
    if(e.keyCode===this.props.id.charCodeAt(0)){
      this.audio.current.play(); 
      this.audio.current.currentTime=0; 
      this.props.handleDisplay(this.props.soundType);
    }
  }

  render() {
    return (
      <button id={this.props.id} className="drum-pad" onClick={this.playSound} block>{this.props.id}
        <audio ref={this.audio} id={this.props.id} src={this.props.src} className="clip"></audio>
      </button>    
    );
  }
}

export default DrumPad;