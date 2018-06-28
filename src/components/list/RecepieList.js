import React, { Component } from 'react';
import { CardGroup } from 'reactstrap';

import RecepieListItem from './RecepieListItem';

class RecepieList extends Component {
  render() {
    const { data, openDetail } = this.props;

    return (
      <div>
        This is plain list of API data:{' '}
        <CardGroup>
          {data.map((item, index) => {
            return (
              <RecepieListItem
                openDetail={openDetail}
                key={index}
                recepie={item}
              />
            );
          })}
        </CardGroup>
      </div>
    );
  }
}

export default RecepieList;
