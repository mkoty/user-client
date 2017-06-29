# React-Redux-Webpack Skeleton

Another ***minimalistic and easy boilerplate*** for a modern Frontend-Webapplication with [React](https://facebook.github.io/react/) to build the User-Interface and [Redux](http://redux.js.org/) to handle the Applications state. Written in [ES6](https://github.com/lukehoban/es6features#readme). Transforming and bundling with [Babel](https://babeljs.io/) and [Webpack](https://webpack.github.io/).


### Getting Started


Clone the repository and install all dependencies

    $ git clone git@github.com:johdirr/react-redux-webpack-skeleton.git
    $ cd react-redux-webpack-skeleton
    $ npm install

thats it.

### Development

The best way to start the App is with the [`webpack-dev-server`](http://webpack.github.io/docs/webpack-dev-server.html). This will watch your code for changes and will magically reload your Browser. To use the `webpack-dev-server` run

    $ npm start
    # or
    $ webpack-dev-server

Then visit your [`localhost` on port `3333`](http://localhost:3333)

#### Styleguide

I'm using [ESLint](http://eslint.org/) with some plugins and extensions. You'll find the config in the [`.eslintrc`](https://github.com/johdirr/react-redux-webpack-skeleton/blob/master/.eslintrc) file.

### Production

To bundle the App for production (uglifying, minimizing, etc.) run

    $ npm run build-prod
    # or
    $ webpack --config webpack.config.production.js  

