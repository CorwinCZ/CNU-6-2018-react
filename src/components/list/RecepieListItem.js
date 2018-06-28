import React, { Component } from 'react';

class RecepieListItem extends Component {
  render() {
    const { recepie, openDetail } = this.props;

    return (
      <div
        onClick={() => {
          openDetail(recepie.slug);
        }}
      >{`${recepie.title} - ${recepie.preparationTime} - ${recepie.slug}`}</div>
    );
  }
}

export default RecepieListItem;
