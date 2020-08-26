import React from 'react';

class Display extends React.Component {

  render() {
    return (
        <p id={this.props.id}>{this.props.state}</p>
    );
  }
}

export default Display;