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
