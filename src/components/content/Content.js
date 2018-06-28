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

  render() {
    console.log('Current state', this.state.page);
    const { page } = this.state;

    return (
      <div>
        {page === 'list' && <List />}

        {page === 'detail' && <Detail />}
      </div>
    );
  }
}

export default Content;
