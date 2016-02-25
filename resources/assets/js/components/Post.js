import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import PromiseStateContainer from './PromiseStateContainer'

class Post extends Component {

  render() {
    return (
      <PromiseStateContainer
        ps={PromiseState.all([this.props.postFetch])}
        onFulfillment={([post]) => {
          return (
            <p>{post.message}</p>
          )
        }}
      />
    )
  }

}

export default connect(props => ({
  postFetch: `/api/posts/${props.params.postId}`,
}))(Post)
