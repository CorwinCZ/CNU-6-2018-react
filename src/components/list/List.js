import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
        This is our listing component
        <button
          onClick={event => {
            this.setState({
              page: 'detail',
            });
          }}
        >
          Go to detail
        </button>
      </div>
    );
  }
}

export default List;
