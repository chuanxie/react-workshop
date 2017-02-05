## Redux Intro

Now we're going to look into Redux. Redux is a tool for state management and is aimed at keeping the management of data easy in large applications. You __do not need Redux by default!__ and can get a lot way with just React, but at some point once your app gets larger you might reach for Redux.

Redux and React play nicely together, but you can also use Redux on its own, and at first we're going to learn Redux by just using Redux, and only move to React later.

## Get started

Run `npm run redux-intro-tests`. This will run some tests on Redux that you can find in `redux-intro/redux.test.js`.

Top tip: any `test('foo')` you can change to `test.only` to only run that test.

Some of the tests pass, but others fail. It's your job to fix them! As you go through each test the examples get more in depth, so be sure to read each carefully. Feel free to break each one or try and change them.

The key parts of redux to note:

your entire app's state is stored in a single object that is called the store.
to change a state you emit an action, an object describing what happened.
reducers take an action and produce the new state.

## Counter exercise

Now run `npm run redux-counter-tests`. These are a series of tests for a Redux app that you need to write. Follow the tests and implement the app so all the tests pass.

## Redux and React

Now we're going to build the counter example using React and add a user interface. Keep in mind throughout this entire thing that the Redux store is just the same as it always has been - this time we're just connecting it to React.

We'll use the `react-redux` package for this which provides us with two parts:

- `connect`, a function used to hook a React component up to the React Redux system. Any component that needs to interact with the store (either to get data, or dispatch actions) must be explicitly connected to it. This is a good thing because you can't accidentally have any random component talking to the store without you first allowing them to.

- `Provider` this component provided by React-Redux hooks up the store to your app. You typically wrap your most top level component in this component, and that's it.

To run this app locally, run `npm run redux-react-exercises`.

