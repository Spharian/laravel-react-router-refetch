import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import { Link } from 'react-router'
import PromiseStateContainer from './PromiseStateContainer'

class Posts extends Component {

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.postsFetch])}
        onFulfillment={([posts]) => {
          return (
            <ul>
              {posts.map((post) => {
                return (
                  <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                )
              })}
            </ul>
          )
        }}
      />
    )
  }

}

export default connect(props => ({
  postsFetch: '/api/posts',
}))(Posts)
