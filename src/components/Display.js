import React from 'react';
//component for Drum Machine's display screen

class Display extends React.Component {

  render() {
    return (
        <div id="display">{this.props.state}</div>
    );
  }
}

export default Display;