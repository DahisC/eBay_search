import axios from 'axios';
import React from 'react';
import {
  Grid,
  Input,
  Button,
  Icon,
  Modal,
  Popup,
  Segment,
} from 'semantic-ui-react';

const SettingButton = (props) => (
  <Button icon color="blue" onClick={props.handleSearch} size="big">
    <Icon name="setting" />
  </Button>
);

const SearchButton = (props) => (
  <Button
    icon
    color="blue"
    onClick={props.handleSearch}
    size="big"
    loading={props.isSearching}
    disabled={props.isSearching}
  >
    <Icon name="search" />
  </Button>
);

class SearchBar extends React.Component {
  state = {
    isSearching: false,
    itemArray: [],
    itemTotal: 0,
    itemOffset: 0,
  };

  componentDidUpdate() {
    console.log('==');
    console.log(this.state);
  }

  handleSellerID = (e) => this.setState({ sellerID: e.target.value });
  handleSearch = () => {
    this.setState({
      isSearching: true,
      itemArray: [],
    });
    const category_ids = '281';

    // Filter
    // { = %7B
    // } = %7D
    const sellers = '%7Bleperfect%7D';
    const deliveryPostalCode = '19713';
    const deliveryCountry = 'US';
    const buyingOptions = '%7BFIXED_PRICE%7D';
    const filter = `sellers:${sellers},deliveryPostalCode:${deliveryPostalCode},deliveryCountry:${deliveryCountry},buyingOptions:${buyingOptions}`;

    const search = (offset = 0) => {
      axios
        .get(
          `https://api.ebay.com/buy/browse/v1/item_summary/search?limit=200&offset=${offset}&category_ids=${category_ids}&filter=${filter}`,
          {
            headers: {
              Authorization: `Bearer ${this.props.accessToken}`,
            },
          },
        )
        .then((res) => {
          this.props.handleItemTotal(res.data.total);
          this.props.handleItemArray(res.data.itemSummaries);
          this.setState({
            itemArray: [...this.state.itemArray, ...res.data.itemSummaries],
          });
          if (
            res.data.offset + res.data.itemSummaries.length <
            res.data.total
          ) {
            search(res.data.offset + res.data.itemSummaries.length);
          } else {
            this.setState({
              isSearching: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    search();
  };

  render() {
    return (
      <Grid.Row style={{ height: '30%' }}>
        <Grid.Column verticalAlign="middle">
          <Input
            action
            placeholder="eBay Seller ID"
            value={this.state.sellerID}
            onChange={this.handleSellerID}
            size="big"
          >
            <input />
            <SettingButton />
            <SearchButton
              handleSearch={this.handleSearch}
              isSearching={this.state.isSearching}
            />
          </Input>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default SearchBar;
