import React, { Component } from 'react';

import RecepieListItem from './RecepieListItem';

class RecepieList extends Component {
  render() {
    const { data, openDetail } = this.props;

    return (
      <div>
        This is plain list of API data:{' '}
        {data.map((item, index) => {
          return (
            <RecepieListItem
              openDetail={openDetail}
              key={index}
              recepie={item}
            />
          );
        })}
      </div>
    );
  }
}

export default RecepieList;
