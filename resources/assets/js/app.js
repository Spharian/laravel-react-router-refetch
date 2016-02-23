import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Posts from './components/Posts'
import Post from './components/Post'
import NoMatch from './components/NoMatch'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/posts" component={Posts} />
      <Route path="/posts/:postId" component={Post} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
