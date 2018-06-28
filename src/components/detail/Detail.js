import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
      <div>
        This is our detail component
        <button
          onClick={event => {
            this.setState({
              page: 'list',
            });
          }}
        >
          Go to list
        </button>
      </div>
    );
  }
}

export default Detail;
