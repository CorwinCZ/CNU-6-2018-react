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

  sentUpdatedData = () => {
    console.log('Data from FETCH', this.props.data);
    console.log('DATA in state', this.state.updatedData);
    console.log('Saving!');
    // TODO - add POST request to server
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
          <EditTitle title={title} isEditing={isEditing} />
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
