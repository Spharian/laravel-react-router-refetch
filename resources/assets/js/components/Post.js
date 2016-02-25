import React, { Component } from 'react'
import { connect } from 'react-refetch'

export default class Post extends Component {

  render() {
    return (
      <div>
        {RefetchMixin.fulfilled(this.props.postFetch, post => {
          return (
            <p>{post.message}</p>
          );
        })}
      </div>
    );
  }

}

connect(props => ({
  postFetch: `/api/posts/${props.params.postId}`,
}))(Post)
