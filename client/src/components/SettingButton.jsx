import React from 'react';
import { Button, Modal, Header, Icon, Form, Popup } from 'semantic-ui-react';

class SettingButton extends React.Component {
  state = {
    modalOpen: false,
    categoryID: '',
  };

  handleModalOpen = () =>
    this.setState({ modalOpen: true, categoryID: this.props.categoryID });
  handleModalClose = () => this.setState({ modalOpen: false });
  handleCategoryID = (e) => this.setState({ categoryID: e.target.value });
  handleSet = () => {
    this.props.handleCategoryID(this.state.categoryID);
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <Button
          icon
          color="blue"
          onClick={this.handleModalOpen}
          size="big"
          disabled={this.props.isSearching}
        >
          <Icon name="setting" />
        </Button>
        <Modal open={this.state.modalOpen} size="tiny">
          <Modal.Header>
            <Icon name="setting" /> Search Setting
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>
                  Category ID (Required)
                  <Popup
                    on="click"
                    trigger={<Icon name="question circle" />}
                    content={
                      <a
                        href="https://pages.ebay.com/sellerinformation/news/categorychanges.html"
                        target="_blank"
                      >
                        eBay Category ID List
                      </a>
                    }
                  />
                </label>
                <input
                  placeholder="Category ID"
                  onChange={this.handleCategoryID}
                  value={this.state.categoryID}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button inverted color="red" onClick={this.handleModalClose}>
              Cancel
            </Button>
            <Button inverted color="blue" onClick={this.handleSet}>
              Set
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SettingButton;
