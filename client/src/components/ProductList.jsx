import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const ProductList = (props) => (
  <Grid.Row style={{ height: '70%' }}>
    <Grid.Column verticalAlign="top">
      <Segment
        inverted
        color="blue"
        style={{ width: '90%', margin: '0px auto' }}
      >
        Blue
      </Segment>
    </Grid.Column>
  </Grid.Row>
);

export default ProductList;
