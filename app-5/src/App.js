import React, {Component} from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Image url={"https://images8.alphacoders.com/601/thumb-350-601705.jpg"} />
      </div>
    );
  }
}

export default App;
