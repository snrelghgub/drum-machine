import React from 'react';
import './App.css';
import DrumPad from './components/DrumPad.js';
import Display from './components/Display.js';
import {
  LoadingOutlined,
} from '@ant-design/icons';

import { Typography } from 'antd';
import { Card } from 'antd';
import { Layout } from 'antd';

const { Footer, Header, Content } = Layout;
const { Title } = Typography;



const drumkit = [
  { id: "Q", soundType: "Heater-1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { id: "W", soundType: "Heater-2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { id: "E", soundType: "Heater-3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { id: "A", soundType: "Heater-4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { id: "S", soundType: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { id: "D", soundType: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { id: "Z", soundType: "Kick-n'-Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { id: "X", soundType: "Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { id: "C", soundType: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: "press a Key or Click to play drums",
    }
  }

  handleDisplay = (soundType) => {
    console.log(soundType);
    this.setState({
      display: soundType,
    })
  }

  render() {
    return (
      <Layout style={{ backgroundColor: 'white', height: '100vh' }}>
        <Content id="wrapper" style={{ backgroundColor: 'blue' }}>
          <Layout>
            <Header style={{ backgroundColor: 'white' }}>
              <Title style={{ textAlign: 'center' }}><div id="machine-name">e<LoadingOutlined />Drumz</div></Title>
            </Header>
            <div id="drum-machine">
              <Card style={{ width: '400px', margin: 'auto' }}>
                <Display id="display" state={this.state.display} />
                {drumkit.map((x) =>
                  <DrumPad id={x.id} soundType={x.soundType} src={x.src} handleDisplay={this.handleDisplay} />
                )}
              </Card>
            </div>
            <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>developed by <a target="blank" href="http://github.com/snrelghgub" id="github-link">Taizy</a></Footer>
          </Layout>
        </Content>
      </Layout>
    );
  }
}


export default App;
