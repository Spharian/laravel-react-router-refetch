import React from 'react'

const Error = React.createClass({

  render() {
    return (
      <div>Error: {this.props.error}</div>
    );
  }

});

export default Error;
