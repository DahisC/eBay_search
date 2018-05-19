import React from 'react';
import { Grid, Segment, Divider, Button, Icon } from 'semantic-ui-react';

const SearchInfo = (props) => (
  <Grid.Row style={{ height: '70%' }} verticalAlign="top">
    <Grid.Column>
      <Segment
        inverted
        color="blue"
        style={{ width: '80%', margin: '0px auto' }}
      >
        <p>
          {props.itemArray.length} / {props.itemTotal}
        </p>
        <Divider />
        <p>接下來你可以</p>
        <Button.Group>
          <Button icon labelPosition="left" inverted color="olive" size="large">
            <Icon name="file excel outline" />
            Export to Excel
          </Button>
          <Button icon labelPosition="left" inverted color="olive" size="large">
            <Icon name="file image outline" />
            Download Image
          </Button>
        </Button.Group>
      </Segment>
    </Grid.Column>
  </Grid.Row>
);

export default SearchInfo;
