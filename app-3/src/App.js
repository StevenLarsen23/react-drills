import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: ['Ironman', 'Captain America', 'Scarlet Witch', 'Thor', 'Ant-Man', 'Hulk']
    };
  }

  handleChange(filter) {
    this.setState({filterString: filter});
  }

  render(){
    let avengersShown = this.state.avengers.filter((e, i) => {
      return e.includes(this.state.filterString);
    })
    .map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });
    return(
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>{avengersShown}
      </div>
    )
  }
}


export default App;
