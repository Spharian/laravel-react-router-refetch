import React, { Component } from 'react'
import { connect } from 'react-refetch'
import { Link } from 'react-router'

export default class Posts extends Component {

  render() {
    return (
      <div>
        {RefetchMixin.fulfilled(this.props.postsFetch, posts => {
          return (
            <ul>
              {posts.map((post) => {
                return (
                  <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    );
  }

}

connect(props => ({
  postsFetch: '/api/posts',
}))(Posts)
