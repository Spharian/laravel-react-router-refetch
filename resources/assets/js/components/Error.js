import React, { Component } from 'react'

class Error extends Component {

  render() {
    return (
      <div>Error: {this.props.error}</div>
    )
  }

}

export default Error
