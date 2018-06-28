import React, { Component } from 'react';

import List from '../list/List';
import Detail from '../detail/Detail';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'list', // 'list' or 'detail'
      detailId: false,
    };
  }

  setPage = newPage => {
    this.setState({
      page: newPage,
    });
  };

  render() {
    const { page } = this.state;

    return (
      <div>
        {page === 'list' && (
          <List
            onClickHandler={() => {
              this.setPage('detail');
            }}
          />
        )}

        {page === 'detail' && (
          <Detail
            onClickHandler={() => {
              this.setPage('list');
            }}
          />
        )}
      </div>
    );
  }
}

export default Content;
