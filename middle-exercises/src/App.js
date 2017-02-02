import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PropTypesExercise from './PropTypes'

const exercises = [
  [ 'prop-types', 'PropTypes'],
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Workshop with White October Events</h2>
        </div>
        <Router>
          <div>
            <div className="exercise-select">
              <ul>{exercises.map(([url, title], index) => {
                return <li key={index}><Link to={`/exercise/${url}`}>{title}</Link></li>
              })}</ul>
            </div>

            <div className="exercise-item">
              <Route exact path="/exercise/prop-types" component={PropTypesExercise} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
