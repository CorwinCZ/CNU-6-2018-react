import React, { Component } from 'react';
import './Recepie.css';

import Ingredients from './Ingredients';
import Directions from './Directions';

import EditTitle from './EditTitle';

class Recepie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      updatedData: props.data,
    };
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  postData = (url, data) => {
    return fetch(url, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(response => response.json());
  };

  sentUpdatedData = () => {
    const { data, redirectToListing } = this.props;
    const url = `https://cookbook.jakubricar.cz/api/recipes/${data._id}`;
    this.postData(url, this.state.updatedData).then(resData => {
      redirectToListing();
    });
  };

  updateData = (field, value) => {
    const { updatedData } = this.state;
    this.setState({
      updatedData: {
        ...updatedData,
        [field]: value,
      },
    });
  };

  render() {
    const {
      title,
      preparationTime,
      ingredients,
      servingCount,
      directions,
    } = this.props.data;
    const { isEditing } = this.state;

    return (
      <div>
        <div className="bottomMargin">
          <EditTitle
            title={title}
            isEditing={isEditing}
            updateData={this.updateData}
          />
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.sentUpdatedData}>Save changes</button>
          <button>Delete</button>
        </div>
        {preparationTime && (
          <div className="bottomMargin">{`Preparation time: ${preparationTime} minutes`}</div>
        )}

        <div className="bottomMargin">
          <div className="ingredients">
            <h3>Ingredients</h3>
            {servingCount && <div>{`Serves: ${servingCount}`}</div>}
            <Ingredients data={ingredients} />
          </div>
          <div className="directions">
            <h3>Directions</h3>
            <Directions directions={directions} />
          </div>
        </div>
      </div>
    );
  }
}

export default Recepie;
