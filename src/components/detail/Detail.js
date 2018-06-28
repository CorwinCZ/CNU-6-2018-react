import React, { Component } from 'react';

class Detail extends Component {
  render() {
    const { onClickHandler } = this.props;
    return (
      <div>
        This is our detail component
        <button onClick={onClickHandler}>Go to list</button>
      </div>
    );
  }
}

export default Detail;
