import React, { Component } from 'react'

// make sure you've run `yarn run dummy-api` first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/posts')
      .then(data => data.json())
      .then(posts => {
        // EXERCISE: how do I store the new posts as state on the component?
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          // EXERCISE: render each post here
          // EXERCISE: abstract a <Post> component
          // and define propTypes for it
          null
        )) }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
      </div>
    )
  }
}
