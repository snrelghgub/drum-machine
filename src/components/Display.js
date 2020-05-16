import React from 'react';
//component for Drum Machine's display screen
import { Typography } from 'antd';

const { Title } = Typography;

class Display extends React.Component {

  render() {
    return (
        <div id={this.props.id}><Title level={4} style={{backgroundColor: "#F8F8F8", paddingRight: "10px"}}>{this.props.state}</Title></div>
    );
  }
}

export default Display;