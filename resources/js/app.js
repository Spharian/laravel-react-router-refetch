import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import App from './components/App'
import Posts from './components/Posts'
import Post from './components/Post'
import NoMatch from './components/NoMatch'

render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" exact />
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/:postId" exact component={Post} />
        <Route component={NoMatch} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('app'))
