import React from 'react';
import { Drawer, MenuItem, Divider } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

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
          title="Roomblocker"
          onRightIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            <IconButton>
              <i className="material-icons md-24">menu</i>
            </IconButton>
          }
          style={{
            backgroundColor: '#2d353f',
            boxShadow: 'none',
            fontFamily: 'Roboto, sans-serif',
          }}
          showMenuIconButton={false}
        />
      <Drawer
        docked={false}
        open={this.state.open}
        openSecondary={true}
        onRequestChange={(open) => this.setState({ open })}>
          <MenuItem onTouchTap={this.handleClose}>
            Home
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Requests</MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose}>Sign out</MenuItem>
        </Drawer>
      </div>
    );
  }
}
