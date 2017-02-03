import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PropTypesExercise from './PropTypes'
import AsyncDataExercise from './AsyncData'
import AsyncDataUserInputExercise from './AsyncDataUserInput'

const exercises = [
  ['prop-types', 'PropTypes', PropTypesExercise],
  ['async-data', 'Async Data', AsyncDataExercise],
  ['async-data-user-input', 'Async Data and User Input', AsyncDataUserInputExercise],
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
              <ul>
                <li><Link to="/">Home</Link></li>
                {exercises.map(([url, title], index) => (
                  <li key={index}><Link to={`/exercise/${url}`}>{title}</Link></li>
                ))}
              </ul>
            </div>

            <div className="exercise-item">
              <Route exact path="/" render={() => (
                <p>Pick an exercise above to work on.</p>
              )}></Route>


              {exercises.map(([url, , component]) => (
                <Route exact
                  key={url}
                  path={`/exercise/${url}`}
                  component={component} />
              ))}
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
