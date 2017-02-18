import React from 'react';
import { Drawer, MenuItem, Divider } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import styled from 'styled-components';

export default class TopNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: true });

  render() {
    const PinnedAppBar = styled(AppBar)`
      -moz-transition: all 4500ms cubic-bezier(0.4, 0, 0.2, 1) !important;
      -o-transition: all 4500ms cubic-bezier(0.4, 0, 0.2, 1) !important;
      -webkit-transition: all 4500ms cubic-bezier(0.4, 0, 0.2, 1) !important;
      transition: all 4500ms cubic-bezier(0.4, 0, 0.2, 1) !important;
      left: ${this.state.open ? '255px' : '0'};
    `;

    return (
      <div>
        <PinnedAppBar
          title="Roomblocker"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{
            backgroundColor: '#2d353f',
            boxShadow: 'none',
            fontFamily: 'Roboto, sans-serif',
            width: 'auto',
            right: 0,
            position: 'fixed',
          }}
        />
        <Drawer
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <Subheader>Groups</Subheader>
          <MenuItem onTouchTap={this.handleClose}>
            Tahoe
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Requests</MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose}>Sign out</MenuItem>
        </Drawer>
      </div>
    );
  }
}
