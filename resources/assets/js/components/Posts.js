import React from 'react'
import { connect } from 'react-refetch'
import { Link } from 'react-router'
import RefetchMixin from '../mixins/RefetchMixin'

const Posts = React.createClass({
  mixins: [RefetchMixin],

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

});

export default connect(props => ({
  postsFetch: '/api/posts',
}))(Posts)
