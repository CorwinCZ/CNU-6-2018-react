import React, { Component } from 'react';

class EditTitle extends Component {
  render() {
    const { title, isEditing } = this.props;

    if (isEditing) {
      return <input className="left" defaultValue={title} />;
    }

    return <h1 className="left">{title}</h1>;
  }
}

export default EditTitle;
