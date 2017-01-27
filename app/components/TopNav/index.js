import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import StyledAppBar from './StyledAppBar';

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
        <StyledAppBar
          title="New App"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({ open })}>
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Requests</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Sign out</MenuItem>
        </Drawer>
      </div>
    );
  }
}
