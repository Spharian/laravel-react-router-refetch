import React from 'react'
import { connect } from 'react-refetch'
import RefetchMixin from '../mixins/RefetchMixin'

const Post = React.createClass({
  mixins: [RefetchMixin],

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

});

export default connect(props => ({
  postFetch: `/api/posts/${props.params.postId}`,
}))(Post)
