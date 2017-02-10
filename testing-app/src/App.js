import React, { Component } from 'react'
import './App.css'
import ListOfPeople from './ListOfPeople'
import Counter from './Counter'

const people = [
  { id: 1, name: 'Jack', colour: 'blue' },
  { id: 2, name: 'Isaac', colour: 'red' },
  { id: 3, name: 'James', colour: 'green' },
  { id: 4, name: 'Grant', colour: 'yellow' },

]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Testing React</h2>
        </div>
        <ListOfPeople people={people} />
        <Counter />
      </div>
    )
  }
}

export default App
