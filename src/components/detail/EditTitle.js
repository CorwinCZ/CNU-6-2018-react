import React, { Component } from 'react';

class EditTitle extends Component {
  onChangeHandler = event => {
    const { updateData } = this.props;
    updateData('title', event.target.value);
  };

  render() {
    const { title, isEditing } = this.props;

    if (isEditing) {
      return (
        <input
          className="left"
          defaultValue={title}
          onChange={this.onChangeHandler}
        />
      );
    }

    return <h1 className="left">{title}</h1>;
  }
}

export default EditTitle;
