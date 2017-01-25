import React from 'react';
import { Drawer, AppBar, MenuItem } from 'material-ui';

export default class TopNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="New App"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
