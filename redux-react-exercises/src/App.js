import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ReduxCounter from './ReduxCounter'
import ReduxTodos from './ReduxTodos'

const exercises = [
  ['redux-counter', 'ReduxCounter', ReduxCounter],
  ['redux-todos', 'ReduxTodos', ReduxTodos],
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
          <h2>Redux and React exercise</h2>
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
