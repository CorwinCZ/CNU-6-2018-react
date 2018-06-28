import React, { Component } from 'react';

class Recepie extends Component {
  render() {
    console.log('Recepie data', this.props.data);
    return <div>This is our recepie</div>;
  }
}

export default Recepie;
