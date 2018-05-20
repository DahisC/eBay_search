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

import SettingButton from './SettingButton';

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
    categoryID: '', // 281
    sellerID: '', // leperfect
  };

  handleSellerID = (e) => this.setState({ sellerID: e.target.value });
  handleCategoryID = (categoryID) => this.setState({ categoryID });
  handleSearch = () => {
    if (this.state.categoryID === '' || this.state.sellerID === '') {
      console.log('No');
      return;
    }

    this.setState({
      isSearching: true,
      itemArray: [],
    });
    const category_ids = this.state.categoryID;

    // Filter
    // { = %7B
    // } = %7D
    const sellers = `%7B${this.state.sellerID}%7D`;
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
          if (res.data.total === 0) {
            this.setState({
              isSearching: false,
            });
          } else {
            if (
              res.data.offset + res.data.itemSummaries.length <
              res.data.total
            ) {
              this.props.handleItemTotal(res.data.total);
              this.props.handleItemArray([
                ...this.state.itemArray,
                ...res.data.itemSummaries,
              ]);
              this.setState({
                itemArray: [...this.state.itemArray, ...res.data.itemSummaries],
              });
              search(res.data.offset + res.data.itemSummaries.length);
            } else {
              this.props.handleItemTotal(res.data.total);
              this.props.handleItemArray([
                ...this.state.itemArray,
                ...res.data.itemSummaries,
              ]);
              this.setState({
                itemArray: [...this.state.itemArray, ...res.data.itemSummaries],
                isSearching: false,
              });
            }
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
            <SettingButton
              categoryID={this.state.categoryID}
              handleCategoryID={this.handleCategoryID}
              isSearching={this.state.isSearching}
            />
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
