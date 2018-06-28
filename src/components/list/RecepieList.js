import React, { Component } from 'react';

import RecepieListItem from './RecepieListItem';

class RecepieList extends Component {
  render() {
    const { data } = this.props;
    console.log('Data in recepie List', data);

    return (
      <div>
        This is plain list of API data:{' '}
        {data.map((item, index) => {
          return <RecepieListItem key={index} recepie={item} />;
        })}
      </div>
    );
  }
}

export default RecepieList;
