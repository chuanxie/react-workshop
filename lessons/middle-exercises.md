## Middle Exercises

We're now going to get into some more complicated React which means we're going to run them locally on your laptops. We're still not going to look into exactly how to do this - shortly we'll talk about creating a new React project and how to run it, but for now just focus on the specifics of React itself. We'll get to the tooling later :)

## Get running

There's two parts you need to run - the frontend and a small dummy API that we'll run locally.

From the top level directory, run:

- `npm run dummy-api` in one terminal window/tab
- `npm run middle-exercises` in another window/tab

You should see a browser window open with `localhost:3000`, and you'll also have an API running on `localhost:3004`. This API is just ome dummy data that we'll use for some of the exercises.

You should open your editor too, as you'll need to edit files in these exercises!

## PropTypes

For each of these exercises, you'll need to click a link on the page to load that exercise. Work from top to bottom - the first is PropTypes.

In `middle-exercises/src/` you'll find a JS file for each of the exercises. In each of these files there's a series of comments asking you to do things. I'll do each of them on screen - or parts to get you started - but then you should do the rest. Feel free to try and break things or go rogue, it's great to just dive in and explore.

In some of the earlier exercises we saw how we can pass props to components to make them reusable. React lets each component document what props that we can give it using `PropTypes`. This means you can look at a component and see a list of all the properties that it can take, along with the types that they should have.

You can see a list of all the PropTypes here: https://facebook.github.io/react/docs/typechecking-with-proptypes.html

Once you give a component a list of the properties it expects, you'll then see nice warnings logged to the console if you don't give it the right properties, or properties that it's missing.

You can also set `defaultProps` that are used if you don't pass in a value.

## Async Data

Often in React you'll want to load some data from an API and display it in your application.

We're running a dummy API on `localhost:3004`. If you visit `http://localhost:3004/posts` in your browser, you'll see a list of posts that our "API" is givng us. We want to fetch those and render them on to the screen.

__Note__: we're using the new `fetch` API to make HTTP requests - be aware that it is not supported in Safari. You can use the whatwg-fetch polyfill [https://github.com/github/fetch] to support Safari. I'm not doing so here for the sake of keeping the code in the exercises down.

A React component goes through certain lifecycle events:

- It is first rendered into the DOM (or _mounted_, in React terms)
- It gets re-rendered with updated properties or state
- It gets removed from the DOM (or _unmounted_).

You can see a full list of these here: https://facebook.github.io/react/docs/react-component.html.

When you're fetching async data you only want to do it when the component is rendered onto the page, so it's recommended that you use `componentDidMount` for this. This is called by React when the component is first placed onto the page.

We keep our data in `this.state`, and first set it to `undefined`. It's important to remember that you have to deal with the case of the data not being present, as well as the case of the component having data.

Notice the `render` method of this component - you can use `&&` to do shorthand conditionals. You can't do big complex `if` statements in JSX - this is by design.

## Async data and user input

Now we've seen how to handle async data, we're now going to look at how we deal with user input.

The API we're using lets us search through all our data based on a search term:

```
http://localhost:3004/posts?q=react
```

We're going to let the user search through based on a search term they define. This exercise uses a lot of the different things we've learned so far about React, so be ready to put it all into action!

The first thing you'll need to do is add a piece of state for the user's input, and bind the text input `onChange` event to a function that udpates the state. You'll then need to bind to the form's `onSubmit` event to make the app search the API when the user submits the form.

There's a couple of bonus exercises too, like auto focusing the search input, and clearing the text box, for the adventurous amongst you.

## Child to Parent Communication

One very common pattern in React is that a parent component will have some state and it will pass it down into a child component as a property. This means that the parent component owns all the state, and every time the state needs to change we need to communicate that to the parent.

The best way to do this is via _callback props_. This is when we render a component and give it a function as a property. It should then call that function when something changes. That gives the child component a way to tlel the parent that something has changed.

In this example we have the `AddNewPost` component that is going to render the form and let the user submit new posts to our API. It will do this by `POST`ing to the API to store the post, and then it will call the callback property so the parent component knows that it has the new post. It can then update its state and render the new post.

## Functions that return components

After this set of exercises we're going to start using other third party libraries that wrap our components with extra functionality. One pattern we'll see with a library called Redux, is that it provides functions that we should pass components to, and it alters the behaviour of our components with some extra special properties specific to that library.

In this example we have the `wrapWithSpecialProp` function, that takes a component, gives it a super secret property (imagine this as some library internal that they don't want to expose), and renders it.

Don't worry if this takes a while to sink in - it's not that intuitive at first - but have a play with the code and see if you can rewrite it as per the comments.



