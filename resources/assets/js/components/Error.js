import React, { Component } from 'react'

class Error extends Component {

  render() {
    return (
      <p style={{color: 'red'}}>
        Error: {this.props.error.message}
      </p>
    )
  }

}

export default Error
