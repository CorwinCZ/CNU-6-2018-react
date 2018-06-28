import React, { Component } from 'react';

import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

class RecepieListItem extends Component {
  render() {
    const { recepie, openDetail } = this.props;

    return (
      <div style={{ width: '33%' }}>
        <Card>
          <CardBody>
            <CardTitle>{recepie.title}</CardTitle>
            <CardText>
              {`Preparation time: ${recepie.preparationTime} minutes`}
            </CardText>
            <Button
              color="primary"
              onClick={() => {
                openDetail(recepie.slug);
              }}
            >
              Detail
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RecepieListItem;
