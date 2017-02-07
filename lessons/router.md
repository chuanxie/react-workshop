## React Router exercises

React Router is the best framework for adding routing to React apps. It's current stable version is v34, but the beta of v4 just got released and so I don't teach outdated content, we're going to be using that.

This does mean that the docs are still being updated and a lot of references on the internet are out of date; I recommend this site for now: https://reacttraining.com/react-router/

(PS: the middle exercises and the redux ones all used React Router! Feel free to go back at a later point and look at the code).

The basic premise of RRv4 is that you wrap your application in a `<BrowserRouter>` component. Then, within there, at any point, you can render `<Route>` components which are then rendered if the path they are given matches the current URL.

Run `npm run react-router-exercises` to get the example started.

Look through the code in `App.js`. Note that we wrap most of (but not our entire app) in a `<Router>`. Anything not within a `<Route>` component will always be rendered, so that's the best place to put things like headers, navigation, and so on.

Routes can have a property `exact`, which means they only render when the URL matches their `path` property exactly. If they don't have this property, it will match even if it's a partial URL match - eg a path `/foo` would match the URL of `/foo/bar`.

Routes take a component to render.

You'll notice we have two pages, `Home` and `All Posts`. Add a third, `About`, and render a component. It should be present at the `/about` URL.

Next up, using the skills you've learned earlier, go to the `Posts` component, and update it so it renders a list of all the posts from our dummy API.

Next, go to `SinglePost.js` and make it render a single post from the API based on the ID in the URL.

Finally, can you have a list of all posts, and make it so when you click one it shows below? So at all times you should be able to see a list of posts, and then click one to make it visible. Tip: You'll want to make the Routes not have the `exact` property, so they both render when the URL is `/posts/:id`.
