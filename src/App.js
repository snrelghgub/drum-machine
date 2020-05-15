import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DrumPad from './components/DrumPad.js';
import Display from './components/Display.js';

import { Card } from 'antd';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;



const drumkit = [
  {id:"Q", soundType:"Bass Drum", src:"http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/03-22power%20kick.wav"},
  {id:"W", soundType:"Floor Tom", src:"http://www.denhaku.com/r_box/drumu/lotom.wav"},
  {id:"E", soundType:"Snare Drum", src:"http://bigsamples.free.fr/d_kit/snare/606snare.wav"},
  {id:"A", soundType:"Hanging/Rack Tom", src:"http://www.denhaku.com/r_box/tr707/hitom.wav"},
  {id:"S", soundType:"Hi-hat", src:"http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/26-half%20open%20hi%20hat.wav"},
  {id:"D", soundType:"Crash Cymbal", src:"http://electrongate.com/dmxfiles/CRASH.wav"},
  {id:"Z", soundType:"Ride Cymbal", src:"http://electrongate.com/dmxfiles/PERIDE.wav"},
  {id:"X", soundType:"Splash Cymbal", src:"https://trxcymbals.com/wp-content/uploads/2015/05/10-inch-Splash-NRG.mp3"},
  {id:"C", soundType:"China Cymbal", src:"http://www.drumsoundz.com/Crash-03.wav"}
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
      <Layout style={{ padding: '100px' }}>
        <Header>eDrumZ</Header>
        <Content>
      <div id="drum-machine">
        <Card title={this.state.display}><Display state={this.state.display}/>
        {drumkit.map( (x) => 
            <DrumPad id={x.id} soundType={x.soundType} src={x.src} handleDisplay={this.handleDisplay}/>
        )}
        </Card>
      </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>coded by Taizy</Footer>
      </Layout>
    );
  }
}


export default App;
