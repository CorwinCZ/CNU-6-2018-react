import React, { Component } from 'react';

import RecepieList from './RecepieList';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      loading: true,
      error: false,
    };
  }

  componentDidMount = () => {
    fetch('https://cookbook.jakubricar.cz/api/recipes/')
      .then(response => response.json())
      .then(resData => {
        this.setState({
          data: resData,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  };

  render() {
    const { onClickHandler } = this.props;
    const { data, error, loading } = this.state;

    return (
      <div>
        {loading && <div>Loading ...</div>}
        {error && <div>Some error occured, sorry!</div>}
        {data && <RecepieList openDetail={onClickHandler} data={data} />}
      </div>
    );
  }
}

export default List;
