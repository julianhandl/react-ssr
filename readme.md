# React Server Boilerplate

This is a basic boilerplate to create react apps.
It is predefined to prerender the react app on the server.

## Included:
- React v16.2
- Webpack v4.1.1 (Bundling)
- Babel v6.26 (Transpiler)
- Redux v16.2 (State Management)
- React-Helmet v5.2.0 (Html Head Management)
- React-Router v4.2.0 (Routing)
- React-Router-Redux v5.0 (Routing)
- Sass (Styles)
- Jest (Unit Tests)
- Enzyme (Unit Tests)

## Supported in Babel
- ES2015
- Babel Stage 2 Preset
- Babel React Preset
- Decorators
- Class Properties

## What you need
- Node 8.10.0 LTS
- npm

## Building the app
```js
npm run build
```
This will build your app into a ```dist``` directory, which can either be served by apache or ngnix or be used for server side rendering as seen below.

## Start server for server side react rendering
```js
node server.js
```
This starts the server which is defined in the ```server.js``` file. It will prerender your app and respond to the client with a prefilled html site which already contains the initial state of your app. This is great for search engined and stuff like that.

## Developing your app
This setup can be used to develop your React app.

With this command:
```js
npm run dev
```
you can start a dev server which lets you develop react and is served at [localhost:8080](http://localhost:8080). It supports hot reloading, so you should see all your changes in the browser without reloading.

Sass files and images can be imported as usual:
```js
import "./styles.scss";
import logo from "./logo.png";
```

### Beware:
**./App.js**

This is your main entry point. Your app starts here. It contains the routes and includes your pages.

**./index.html**

This is the main html template. You can change it for your need. Keep the ```<div id="root"></div>``` because this is the place where the app will be rendered.

**./components**

Here you will define all your components. From small widgets to complex pages and so on. Everything thats a react component goes into this folder.

**./resources**

This folder should contain all the resources like images.

**./actions**

Contains all your redux actions.

**./reducers**

Contains all your redux reducers.

**./entryPoint**

Do not change anything in the entryPoint directory unless you know what you're doing. Here we have the entry points for the browser bundle and the dev bundle.

## Testing
This repo is already set up with unittests for it's components. We are testing this with facebooks "Jest" and Airbnb's "Enzyme". This gives us a really good foundation for unit testing react apps.

Just extends or change the tests to fit your needs. If you don't feel like testing you can just ignore or delete the ```*.test.js``` files.

Run the tests by executing:
```js
npm run test
```

## Server rendering with prefilled data
Usually we fetch data from an api to fill our react app with data. Every route we defined, must fetch it's data at one point to render the page the current route has assigned.

Prefetching this data is a very complex topic when it comes to server side rendering. To support this we have to maintain some boilerplate and defined simple guidelines. Here's everything you have to look after:

In ```./Routes.js``` we have defined our Routes that our App will use. Every route object can receive the property ```getLoadDataAction``` which must contain a function. This function must call an action creator that is defined somewhere in our ```./actions``` directory. The calles action should load all the data we need to display the current route and store it in the redux store. With this we can render our App with a prefilled store.

The action will most likely be an async action because we will performa an api call which is async. Check out [redux-thunk](https://github.com/gaearon/redux-thunk#why-do-i-need-this) on how to write an async redux action. **The action must return a promise to work with the server side rendering**.

It should look like this example in the end:

```js
function getInitialData(){
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            // make api action
            dispatch({
                type: "SET_INITIAL_DATA",
                payload: api_data
            });
            resolve();
        });
    }
}
```

To be consistend, we use the same function to get the data on the frontend. When we switch routes in the frontend we also need to fetch it. With ```connect``` from redux we can trigger the action if the data is not already there. Here's an example how:

```js
import React from 'react';
import {connect} from 'react-redux';
import {getInitialData} from './actions/home';

@connect((state) => ({
    data: state.home.data
}), {
    getInitialData
})
class Home extends React.Component {
    componentDidMount(){
        if(!this.props.data){
            this.props.getInitialData()
        }
    }
    render(){
        if(this.props.data){
            // render your data
        }
        else{
            // render loading screen
        }
    }
}
```