import React, { Component } from 'react'

// EXERCISE: can you update this component so it makes an API request to fetch the posts from our dummy API, and renders them?
/*
1. fetch() the posts on componentDidMount
2. Add them to state
3. Render them in the page
*/
class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentWillMount() {
    fetch('http://localhost:3004/posts')
      .then(data => data.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div>
        <p>Some posts!</p>
        { this.state.posts && this.state.posts.map(post => (
          <li key={post.id}>{post.title}</li>))}
      </div>
    )
  }
}

export default Posts
