import React, { Component } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // EXERCISE: you'll need to store the user's search term in state
      posts: undefined,
      searchInput: ''
    }
    this.submitForm.bind(this)
    this.onSearchChange.bind(this)
    this.resetForm.bind(this)
    this.filterPosts.bind(this)
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    // EXERCISE: how can you change this search query based on what
    // the user has typed into the text field
    let url;
    if (this.state.searchInput) {
      url = `http://localhost:3004/posts?q=${this.state.searchInput}`;
    } else {
      url = `http://localhost:3004/posts`;
    }

    fetch(url)
      .then(data => data.json())
      .then(posts => {
        console.log(posts);
        this.setState({
          posts: posts,
        })
      })
  }

  filterPosts() {
    const filtered = this.state.posts.filter(post => {
      return post.title.toLowerCase().indexOf(this.state.searchInput) > -1
    })
    this.setState({
      posts: filtered,
    })
  }

  onSearchChange(e) {
    e.preventDefault();
    const result = e.target.value.toLowerCase();
    this.setState({
      searchInput: result
    }, () => {
      if (result !== '') {
        this.filterPosts()
      } else {
        this.fetchPosts()
      }
    })
  }

  submitForm() {
    this.fetchPosts();
  }

  resetForm(e) {
    e.preventDefault();

    this.setState({
      searchInput: ''
    }, this.fetchPosts);
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          // EXERCISE: abstract this into its own component
          // and fill out the propTypes
          <li key={post.id}><p>{post.title}</p></li>
        )) }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        { this.state.posts && this.state.posts.length === 0 && <span> No result</span>}

        { /* EXERCISE: bind to the onSubmit event on this form so we can search when the user submits */ }
        { /* EXERCISE: you'll need to bind to the onChange event of the input to know the latest value that the user has typed */}
        <form onSubmit={this.submitForm}>
          { /* EXERCISE: csn you make this input auto focus when the user visits the page, like we did earlier on Codepen? */ }
          <input type="text" onChange={e => this.onSearchChange(e)} value={this.state.searchInput}/>
          {/*<input type="submit" value="Search" />*/}
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
          <button onClick={e => this.resetForm(e)}>reset</button>
        </form>
      </div>
    )
  }
}
