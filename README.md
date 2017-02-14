# React Workshop 2017

###JSX

Instead of using `React.createElement` to create HTML elements on the page.

```
const App = function() {
  return React.createElement('p', null, 'Hello World')
}


ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)
```

We can use JSX syntax
```
const App = function() {
  return <p>Hello World</p>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

```
###Splat Properties to pass to component

```
const Hello = function(props) {
   return <p>Name: {props.name}, Colour: {props.favouriteColour}, From: {props.from}</p>
 }

 const App = function() {
   const bunchOfProps = {
     name: 'Jack',
     favouriteColour: 'blue',
     from: 'Cornwall',
   }
   return (
     <div>
       <h1>Welcome to my App</h1>
       <Hello {...bunchOfProps } />
     </div>
   )
 }

```

###State

React define state in the constructor by setting `this.state`. It has to be an object.

When we want to update the state we use this.setState to do that.

`setState` is asynchronous! and we need to set it to `undefined` on constructor.


```

this.setState({ ...this.state, foo: 42 });

this.setState((previousState, currentProps) => {
    return { ...previousState, foo: currentProps.bar };
});

```


####Rendering:

Always create a new array or object by using `map` or `Object.assign` or similar

```
class Hello extends React.Component {
  render() {
    return <ul>{this.props.comments.map(comment => <li>{comment}</li>)}</ul>
  }
}

const App = function() {
  const comments = [
    'The best workshop ever',
    'Pretty great!',
    'The free lunch was the highlight',
  ]

  return (
    <div>
      <h1>Welcome to my App</h1>
      <Hello comments={comments} />
    </div>
  )
}
```

### Ref

`ref`: When React mounts the element it will be called and we can do this to give us a hook to a DOM element.

React has `componentDidMount` and `componentWillMount`. Normally we fetch the data in `componentDidMount`


```
class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  componentDidMount() {
    this.searchInput.focus()
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.searchTerm} onChange={this.onChange} ref={input => this.searchInput = input}/>
      </div>
    )
  }
}
```

A React component goes through certain lifecycle events:

- It is first rendered into the DOM (or _mounted_, in React terms)
- It gets re-rendered with updated properties or state
- It gets removed from the DOM (or _unmounted_).

### Children

React has a special property `children`, useful for inline style.

```
class WillHaveBlueText extends React.Component {
  render() {
    return (
      <div style={{ color: 'blue' }}>{this.props.children}</div>
    )
  }
}

const App = function() {

  return (
    <div>
      <h1>Welcome to my App</h1>
      <WillHaveBlueText>
        <p>Hello world</p>
      </WillHaveBlueText>
    </div>
  )
}
```

###PropTypes

`PostCom` component contains a required props `post` as

```
{
    id: 1,
    title: 'my title'
}
```

```
PostCom.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
}
```
you can check reference from react:
https://facebook.github.io/react/docs/typechecking-with-proptypes.html

###Async Data

 fetch data

 ```
   componentDidMount() {
     fetch('http://localhost:3004/posts')
       .then(data => data.json())
       .then(posts => {
         this.setState({ posts })
       })
   }
 ```

###Child to Parent Communication


One very common pattern in React is that a parent component will have some state and it will pass it down into a child component as a property.
Passing `callback` props to child components. That tells the parent that something has changed.


- In parent component it has `AddNewPost` child component and it will pass the `onNewPost` callback
```
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        <AddNewPost onNewPost={post => this.onNewPost(post)} />
      </div>
    )
  }
```

- On child component it uses `this.props.onNewPost(newPost)` to notify parent

```
  onSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3004/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: this.state.inputValue })

    })
      .then(newPost => newPost.json())
      .then(newPost => {
        this.props.onNewPost(newPost)
        this.setState({
          inputValue: ''
        })
      })
  }
```

### Functions return component


` <WrappedComponent a={1} b={2} />`

```

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>Got given props:</p>
        <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
      </div>
    )
  }
}

const wrapWithSpecialProp = function(CustomComponent) {
  const specialSecretValue = 'foo'
  return props => (
    <CustomComponent {...props} specialProp={specialSecretValue} />
  )
}

const WrappedComponent = wrapWithSpecialProp(MyComponent)
```


##Redux

### Creatstore

```
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)
```


###State again

We don't mutate the state. We create a copy with Object.assign(). Object.assign(state, { visibilityFilter: action.filter }) is also wrong: it will mutate the first argument. You must supply an empty object as the first parameter. You can also enable the object spread operator proposal to write { ...state, ...newState } instead.

We return the previous state in the default case. It's important to return the previous state for any unknown action.


connect state with component

```
const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}
const Connected = connect(mapStateToProps)(Todos)
```


###Reducer

`state` and `action`

`dispatch(action)`


```
    this.props.dispatch({ type: 'NEW_TODO',
        data: {
          text: this.state.input
        }
    })
```


```
export default (state, action) => {
  if (!state) state = {
    todos,
  }

  switch (action.type) {
    case 'NEW_TODO':
      return {
        todos: state.todos.concat([{
          id: state.todos.length + 1,
          done: false,
          text: action.data.text,
        }])
      }

    default:
      return state
  }
}

}

```

also `combineReducers`

###Router

```
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
```


```
<Router>
  <div>
    <div className="exercise-select">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">All Posts</Link></li>
        <li><Link to="/about">About us</Link></li>
      </ul>
    </div>

    <div className="exercise-item">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/posts/:id" component={SinglePost} />
        <Route path="" render={()=> (
          <p>not found</p>
        )} />
      </Switch>
    </div>
  </div>
</Router>
```

`${this.props.match.params.id}`

```
  fetchPost() {
    fetch(`http://localhost:3004/posts/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(post => {
        this.setState({ post })})
  }
```

###Testing

Jest

- Zero configuration testing platform
- Built-in code coverage reports  `--coverage`
- Powerful mocking library

`jest es2015.test.js --watch`

```
function add(a, b) {
  return a + b;
}

module.exports = add;

```

```
const add = require('./add');
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

Enzyme

`jest-enzyme` with Jest

`import { shallow, mount, render } from 'enzyme';`

```
import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('../Foo');

const Foo = require('../Foo');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    //expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    //expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    //expect(mount(<Foo />).find('.foo').length).toBe(1);
  });
});
```

# Resources

### Tutorials
https://egghead.io/courses/building-react-applications-with-idiomatic-redux
https://egghead.io/courses/getting-started-with-redux

### DevTools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
https://github.com/zalmoxisus/redux-devtools-extension#usage

### Free hosting for FE projects
http://surge.sh/

### Testing
http://airbnb.io/enzyme/

### Conditional class names
https://github.com/JedWatson/classnames

### i18l
https://github.com/yahoo/react-intl

### React components in angular app
https://github.com/ngReact/ngReact

### Routing
https://reacttraining.com/react-router/

### Redux
https://github.com/redux-saga/redux-saga
https://github.com/gaearon/redux-thunk

### Type checking
https://facebook.github.io/react/docs/typechecking-with-proptypes.html

### Context
https://facebook.github.io/react/docs/context.html
