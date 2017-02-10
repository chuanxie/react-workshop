# 1: Introduction to React

In this part of the workshop we will introduce and write our first React components.

## Intro to React

http://codepen.io/jackfranklin/pen/OWQvvq?editors=0010

- React components are really just (for now) functions that can render some data into the DOM.
- What makes React powerful is that React components are agnostic, and then we have different libraries for rendering to different places (ReactDOM for browser, React Native, and so on)
- We use `React.createElement` to create HTML elements on the page.
- For each React app, we have one call to `ReactDOM.render`, which places the React component into the DOM.

### Activity:
- Change the output of this DOM element to be a `h1` with the text `Hello, Jack!`

## JSX

http://codepen.io/jackfranklin/pen/ygKJre?editors=0010

- The `React.createElement` code is clunky and gets very verbose once you want to render more than one simple element.
- React also provides this JSX syntax which is very HTML like for creating components and HTML elements.
- React components _must_ have a capital letter at the beginning.
- Don't worry about how we're converting this to JavaScript and running it; we'll talk more about set up later.
- For now, just know that we can use JSX and it will be converted into calls to `React.createElement` for us.

### Activity:
- Change the output of this DOM element to be a `h1` with the text `Hello, Jack!`
- Change the output to be a `div` with multiple other HTML elements within it.

## Composition

http://codepen.io/jackfranklin/pen/ggeMJq?editors=0010

- You should aim to keep your components small, and as such often you'll want one component to render another.
- Here you see we have the `App` component, and the `Hello` component. One component can render another by simply referencing it within JSX.

### Activity:
- Create another component and have the `App` component render it.

## Properties

http://codepen.io/jackfranklin/pen/KaogKV?editors=0010

- Often you will want to customise the behaviour of your components slightly, and you can do this by passing properties (commonly referred to as `props` in React parlance) to a component.
- In this case we tell the `Hello` component what text to have after the `Hello` text.
- Notice how in JSX we can output dynamic data by wrapping it in curly brackets.

### Activity:
- Give the `Hello` component another property called `greeting` which defines the greeting to use, rather than it always using `"Hello"`.

## Splat Properties

http://codepen.io/jackfranklin/pen/apKVKO?editors=0010

- If you have an object, you can use the spread/splat syntax to pass a whole object in as individual properties. This is useful if you have a big object that you want to pass into a component.

### Activity:
- Add another property to the object and output it in the `Hello` component.

## Stateful components

http://codepen.io/jackfranklin/pen/ygKaOV?editors=0010

- Up until now we've seen that components can be defined as functions, but they can also be defined using classes.
- You do this when your component needs to do more than take some properties and render, but it needs to handle state.
- We define state in the constructor by setting `this.state`. It has to be an object.

### Activity:
- Change the initial value of the state.
- Can you make the component take a property to define what the initial value of the counter should be?

## Changing state

http://codepen.io/jackfranklin/pen/vgRyEE?editors=1010

- We can bind to events like `onClick` and call functions when the user interacts with them.
- Note how we have to bind the function to the right scope in the constructor. There's some patterns we can use to avoid this, but they use future JS features that aren't yet guaranteed to be in the language, so for now we'll stick to this.
- When we want to update the state we use `this.setState` to do that.
- When we call `setState`, React will ensure that the DOM is updated to match the new state.
- This is the key idea of React: the render function is a representation of the component with a given state.

### Activity:
- Add another button called `decrement` that decrements the counter.
- Add a button called `reset` that resets the counter.


## Refs and reaching to the DOM

http://codepen.io/jackfranklin/pen/wgmopr?editors=0010

- One of the key principles of React is that you never interact directly with the DOM.
- However now and then we do want to - like when we want to auto-focus a text input.
- To do this we give an element a special `ref` property which is a function. When React mounts the element it will be called and we can do this to give us a hook to a DOM element.
- We can define a method called `componentDidMount` that React calls for us just after the component is rendered, and in there we can grab the reference to the input that we have and call `focus()` on it to focus it.

### Activity:
- React has `componentDidMount` but also `componentWillMount`. Why do we have to use `DidMount` for this to work, and what's the difference between them?
- Add a button that, when clicked, will clear the search box.

## Rendering lists of data

http://codepen.io/jackfranklin/pen/xgWgwV?editors=0010

- One of the most common situations is that you'll have a list of items and you'll want to render something for each of them.
- Here we're taking a list of comments and rendering a list with them all in.
- We use the regular JS function `map`, which takes an array of items and maps them to a new array of items.
- In this case we transform the array into an array of elements, which React will then render for us.

### Activity:

- Create a `Comment` component that can take one comment and render it. Update our `Hello` comment to render a series of `Comment` components.
- Pass through the index of each comment through to the new `<Comment />` component and make it output "1. Some text here".


## Children

http://codepen.io/jackfranklin/pen/bgmyzX?editors=0010

- React has a special property, `children`, which are the elements inside a React component.
- Sometimes you want to make a component that can place other components inside it.
- This is particularly useful for inline styling.

## Activity:

- Rewrite the `WillHaveBlueText` component to be a stateless, functional component.
