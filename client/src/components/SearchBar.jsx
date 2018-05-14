import axios from 'axios';
import React from 'react';
import { Input, Button, Icon, Modal, Popup } from 'semantic-ui-react';

class CategoryButton extends React.Component {
    state = {
        modalOpen: false,
        inputCategoryID: '',
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    // 從伺服器取得 Category List
    componentDidMount() {
        axios.get('/api/readEbayCategory').then((res) => {
            res.data.eBayCategory.forEach(c => {
                c.text = c.CategoryName;
                c.value = c.CategoryID;
            })
            this.setState({
                category: res.data.eBayCategory,
                levelOne: res.data.eBayCategory.filter(c => c.CategoryLevel == 1),
            })
        });
    }

    handleModalOpen = () => this.setState({ modalOpen: true, inputCategoryID: '' });
    handleModalClose = () => this.setState({ modalOpen: false });

    render() {
        return (
            <React.Fragment>
                <Button inverted color="blue" onClick={this.handleModalOpen}>分類</Button>
                <Modal size="tiny" open={this.state.modalOpen}>
                    <Modal.Header>
                        <Icon name="tag" /> 選擇分類
                    </Modal.Header>
                    <Modal.Content>
                        <Input placeholder="分類編號" />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button inverted color="red" onClick={this.handleModalClose}>取消</Button>
                        <Button inverted color="green">確認</Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}

const SearchButton = props => (
    <Button
        icon
        inverted
        color="blue"
        onClick={props.handleSearch}
    >
        <Icon name="search"/>
    </Button>
);

class SearchBar extends React.Component {
    state = {
        sellerID: 'leperfect',
        catetoryID: '281',
    }

    handleSellerID = (e) => this.setState({ sellerID: e.target.value });
    handleSearch = () => {
        axios.post(
            '/api/search',
            {
                sellerID: this.state.sellerID,
                categoryID: this.state.catetoryID,
            }
        ).then((res) => { console.log(res); });
    }

    render() {
        return (
            <Input
                action
                placeholder="eBay Seller ID"
                value={this.state.sellerID}
                onChange={this.handleSellerID}
            >
                <input />
                <CategoryButton />
                <SearchButton handleSearch={this.handleSearch} />
            </Input>
        )
    }
}

export default SearchBar;
