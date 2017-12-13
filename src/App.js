import React, { Component } from 'react';
import './App.css'
import FireworksList from './components/FireworksList'

const fireworks = [
  { id: 1, name: 'Red & Blue Peony', attributeIds: [ 1, 3, 4, 8 ] },
  { id: 2, name: 'Mini-Flying Fish', attributeIds: [ 2, 6, 7 ] }
]

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Combustible Components</h1>
          </div>
        </div>
        <div className="container">
          <FireworksList fireworks={ fireworks } />
        </div>
      </div>
    )
  }
}

export default App;
