import React, { Component } from 'react'

// make sure you've run `yarn run dummy-api` first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // EXERCISE: you'll need to store the user's search term in state
      posts: undefined
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    // EXERCISE: how can you change this search query based on what
    // the user has typed into the text field
    fetch('http://localhost:3004/posts?q=react')
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          <li key={post.title}><p>{post.title}</p></li>
        )) }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        { /* EXERCISE: bind to the onSubmit event on this form so we can search when the user submits */ }
        { /* EXERCISE: you'll need to bind to the onChange event of the input to know the latest value that the user has typed */}
        <form>
          <input type="text" />
          <input type="submit" value="Search" />
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
        </form>
      </div>
    )
  }
}
