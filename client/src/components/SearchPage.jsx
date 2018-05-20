import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Button, Dimmer, Loader } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import SearchInfo from './SearchInfo';
import ProductList from './ProductList';

class SearchPage extends React.Component {
  state = {
    // Root
    isLoading: undefined,
    accessToken: '',
    expiresIn: 0,
    error: undefined,
    // SearchState
    itemArray: [],
    itemTotal: 0,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const authCode = this.props.location.search.split('?code=')[1];
    axios
      .post('http://localhost:9001/api/getOauthToken', {
        authCode,
      })
      .then((res) => {
        this.setState({
          isLoading: false,
          accessToken: res.data.access_token,
          expiresIn: res.data.expires_in,
          error: res.data.error,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleItemArray = (itemArray) => {
    this.setState({ itemArray });
  };
  handleItemTotal = (itemTotal) => this.setState({ itemTotal: itemTotal });

  render() {
    return (
      <Grid centered style={{ height: '100vh' }}>
        {this.state.isLoading === true && (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        )}
        {this.state.error !== undefined && <Redirect to="/" />}
        {this.state.isLoading === false && (
          <React.Fragment>
            <SearchBar
              accessToken={this.state.accessToken}
              itemArray={this.state.itemArray}
              itemTotal={this.state.itemTotal}
              handleItemArray={this.handleItemArray}
              handleItemTotal={this.handleItemTotal}
            />
            <SearchInfo
              itemArray={this.state.itemArray}
              itemTotal={this.state.itemTotal}
            />
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

export default SearchPage;
