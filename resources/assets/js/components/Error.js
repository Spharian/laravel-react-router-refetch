import React, { Component } from 'react'

export default class Error extends Component {

  render() {
    return (
      <div>Error: {this.props.error}</div>
    );
  }

}
