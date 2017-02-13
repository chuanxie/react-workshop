import React, { Component } from 'react'

// EXERCISE: can you update this component so it makes an API request to fetch the post based on the ID?
/*
1. fetch() the post
2. Add it to the state
3. Render it
4. Deal with the case of a post not being found
*/
class SinglePost extends Component {
  constructor(props) {
    super(props)
    console.log(props.match)
    this.state = {
      post: undefined
    }
  }
  componentDidMount() {
    this.fetchPost()
  }

  fetchPost() {
    fetch(`http://localhost:3004/posts/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(post => {
        console.log(post, 'post')
        this.setState({ post })})
  }

  render() {
    if(!this.state.post) return <p>Loading</p>
    // if(Object.keys(this.state.post).length === 0) return <h1>not there</h1>
    return (
      <div>
        <p>A single post! ID: {this.state.post.title}</p>
      </div>
    )
  }
}

export default SinglePost
