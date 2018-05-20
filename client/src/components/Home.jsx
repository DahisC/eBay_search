import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';

const Home = (props) => {
  const clientID = 'DahisChe-SearchBo-PRD-0df6708f9-ed492f67';
  const ruName = 'Dahis_Cheng-DahisChe-Search-rxzwg';
  const authURL = `https://auth.ebay.com/oauth2/authorize?client_id=${clientID}&redirect_uri=${ruName}&response_type=code&scope=https://api.ebay.com/oauth/api_scope`;
  return (
    <Grid centered style={{ height: '100vh', padding: '0px', margin: '0px' }}>
      <Grid.Row style={{ padding: '0px' }}>
        <Grid.Column
          verticalAlign="middle"
          style={{ width: '100%', padding: '0px' }}
        >
          <a
            href={authURL}
            style={{
              height: '50px',
              width: '150px',
              border: '3px solid white',
              borderRadius: '15px',
              padding: '20px',
              fontSize: '1.2em',
              color: 'white',
            }}
          >
            登入 ebay 以繼續
          </a>
        </Grid.Column>
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            fontSize: '1.2em',
          }}
        >
          <p style={{ color: 'grey' }}>
            <Icon name="search" /> eBay Search Bot
            <span style={{ fontSize: '0.6em' }}> - ver. 2.0.0</span>
          </p>
          <p style={{ color: 'grey', textAlign: 'left' }}>
            <Icon name="facebook square" /> Swirling Cheng
          </p>
        </div>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
