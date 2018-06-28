import React, { Component } from 'react';
import './Ingredients.css';

class Ingredients extends Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Ammount</th>
            <th>Ingredience</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{`${item.amount || ''} ${item.amountUnit || ''}`}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Ingredients;
