import React, { Component } from 'react';

class RecepieListItem extends Component {
  render() {
    const { recepie } = this.props;

    return (
      <div>{`${recepie.title} - ${recepie.preparationTime} - ${
        recepie.slug
      }`}</div>
    );
  }
}

export default RecepieListItem;
