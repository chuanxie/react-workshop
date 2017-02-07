import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Posts from './Posts'
import SinglePost from './SinglePost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Routing!</h2>
        </div>
        <Router>
          <div>
            <div className="exercise-select">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">All Posts</Link></li>
              </ul>
            </div>

            <div className="exercise-item">
              {/* EXERCISE: add another Route for an "about page" */}
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/posts/:id" component={SinglePost} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
