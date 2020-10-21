import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      superHeros: ['Batman', 'Superman', 'Wonder Woman', 'The Flash', 'Green Arrow', 'Cyborg']
    };
  }

  render(){
    let superHerosShown = this.state.superHeros.map((e, i) => {
    return <h2 key={i}>{e}</h2>;
    });
    return(
      <div className='App'>
        {superHerosShown}
      </div>
    )
  }
}

export default App;
