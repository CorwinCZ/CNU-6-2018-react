import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const { onClickHandler, detailSlug } = this.props;
    console.log('IN DETAIL', detailSlug);
    return (
      <div>
        This is our detail component
        <button onClick={onClickHandler}>Go to list</button>
      </div>
    );
  }
}

export default Detail;
