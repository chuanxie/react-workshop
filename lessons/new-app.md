## Using create-react-app

Up until now we have used apps that I'd set up ahead of time for the workshop. However, we're now going to actually create a new application.

To do this you need create-react-app installed: `npm install --global create-react-app`. Alternatively, `yarn global add create-react-app`.

Before we start, make sure none of the apps from earlier today are running!

To generate a new app, you can run:

```
create-react-app my-app
```

For each of these exercises, you should create a new app.

## App One

You've been asked to build an application that lets you show profile information from GitHub about a particular username.

The requirements:

- I can visit the page and see a search box that is automatically focused.
- I can search for a GitHub username.
- We make a request to the API to fetch the user's profile information, and display it on the page.
- It should show me an error if the username does not exist.

Instead of the actual GitHub API, you should use my proxy, http://github-proxy-api.herokuapp.com/users/jackfranklin, which will avoid us being rate limited!
