import React from 'react';
import {
  Grid,
  Segment,
  Divider,
  Button,
  Icon,
  Progress,
} from 'semantic-ui-react';

import ExportExcelButton from './ExportExcelButton';
import DownloadImageButton from './DownloadImageButton';

const SearchInfo = (props) => (
  <Grid.Row style={{ height: '70%' }} verticalAlign="top">
    <Grid.Column textAlign="center">
      <Segment
        inverted
        color="blue"
        style={{ width: '80%', margin: '0px auto' }}
      >
        {/* {props.itemArray.length === 0 && props.itemTotal === 0 && <p>-</p>}
        {props.itemArray.length !== 0 &&
          props.itemTotal !== 0 && (
            <p>
              {' '}
              C: {props.itemArray.length} / T: {props.itemTotal}{' '}
            </p>
          )} */}
        <Progress
          // percent={props.itemArray.length / props.itemTotal * 100}
          inverted
          indicating
          label={
            props.itemTotal === 0 ? (
              'Start Search'
            ) : (
              <span style={{ color: 'white' }}>
                Found {props.itemTotal} items
              </span>
            )
          }
          value={props.itemArray.length}
          total={props.itemTotal}
        />
        {props.itemArray.length / props.itemTotal * 100 === 100 && (
          <React.Fragment>
            <Divider />
            <p style={{ fontWeight: 'bolder' }}>You can ...</p>
            <Button.Group>
              <ExportExcelButton itemArray={props.itemArray} />
              <DownloadImageButton itemArray={props.itemArray} />
            </Button.Group>
          </React.Fragment>
        )}
      </Segment>
    </Grid.Column>
  </Grid.Row>
);

export default SearchInfo;
