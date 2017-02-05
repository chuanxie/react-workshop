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
import FunctionsThatReturnComponents from './FunctionsThatReturnComponents'
import ChildParentCommunication from './ChildParentCommunication'

const exercises = [
  ['prop-types', 'PropTypes', PropTypesExercise],
  ['async-data', 'Async Data', AsyncDataExercise],
  ['async-data-user-input', 'Async Data and User Input', AsyncDataUserInputExercise],
  ['child-parent-comms', 'Child Parent Communication', ChildParentCommunication],
  ['functions', 'Functions that create components', FunctionsThatReturnComponents],
]

const CustomLink = ({ children, to }) => (
  <Route path={to} exact children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{children}</Link>
    </div>
  )} />
)

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
                <li><CustomLink to="/">Home</CustomLink></li>
                {exercises.map(([url, title], index) => (
                  <li key={index}><CustomLink to={`/exercise/${url}`}>{title}</CustomLink></li>
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
