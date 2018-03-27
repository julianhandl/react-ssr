# React Server Boilerplate

This is a basic boilerplate to create react apps.
It is predefined to prerender the react app on the server.

## Included:
- Redux
- React-Router
- React-Router-Redux

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
This setup can be used to develop your React app. If you want really quick development or just prototyping, use *Create React App*.

With this command:
```js
npm run dev
```
you can start a dev server which lets you develop react and is served at [localhost:8080](http://localhost:8080). It supports hot reloading, so you should see all your changes in the browser without reloading.