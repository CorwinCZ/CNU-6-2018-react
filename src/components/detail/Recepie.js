import React, { Component } from 'react';

class Recepie extends Component {
  render() {
    console.log('Recepie data', this.props.data);
    return (
      <div>
        <div>
          <h1>Title</h1>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <div>Ingredients</div>
          <div>Directions</div>
        </div>
      </div>
    );
  }
}

export default Recepie;
