import React, { Component } from 'react';

class Directions extends Component {
  render() {
    const { directions } = this.props;

    return <div>{directions}</div>;
  }
}

export default Directions;
