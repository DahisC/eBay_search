import React from 'react';
import { Button } from 'semantic-ui-react';

const Home = (props) => {
  const clientID = 'DahisChe-SearchBo-PRD-0df6708f9-ed492f67';
  const ruName = 'Dahis_Cheng-DahisChe-Search-rxzwg';
  const authURL = `https://auth.ebay.com/oauth2/authorize?client_id=${clientID}&redirect_uri=${ruName}&response_type=code&scope=https://api.ebay.com/oauth/api_scope`;
  return (
    <Button>
      <a href={authURL}> 登入 ebay 以繼續</a>
    </Button>
  );
};

export default Home;
