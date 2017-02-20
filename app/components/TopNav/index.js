import React from 'react';
import { Drawer, MenuItem, Divider } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {blue500, yellow600} from 'material-ui/styles/colors';

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
          title="AppJoy"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{
            backgroundColor: '#2d353f',
            boxShadow: 'none',
            fontFamily: 'Roboto, sans-serif',
          }}
        />
      <Drawer
        docked={false}
        zDepth={0}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}>
          <List>
            <Subheader>App Name</Subheader>
            <ListItem
              primaryText="Leads"
              leftAvatar={<Avatar icon={<i className="material-icons">star</i>} backgroundColor={yellow600} />}
              rightIcon={
                <i className="material-icons">settings</i>
              }
            />
            <ListItem
              primaryText="Contacts"
              leftAvatar={<Avatar icon={<i className="material-icons">person</i>} backgroundColor={blue500} />}
              rightIcon={
                <i className="material-icons">settings</i>
              }
            />
            <ListItem
              primaryText="Accounts"
              leftAvatar={<Avatar icon={<i className="material-icons">business</i>} backgroundColor={'purple'} />}
              rightIcon={
                <i className="material-icons">settings</i>
              }
            />
            <ListItem
              primaryText="Opportunities"
              leftAvatar={<Avatar icon={<i className="material-icons">work</i>} backgroundColor={'green'} />}
              rightIcon={
                <i className="material-icons md-24">settings</i>
              }
            />
            <ListItem
              primaryText="Reports"
              leftAvatar={<Avatar icon={<i className="material-icons">folder</i>} backgroundColor={''} />}
              rightIcon={
                <i className="material-icons md-24">settings</i>
              }
            />
            <ListItem
              primaryText="Dashboards"
              leftAvatar={<Avatar icon={<i className="material-icons">folder</i>} backgroundColor={''} />}
              rightIcon={
                <i className="material-icons md-24">settings</i>
              }
            />
          </List>
          <Divider />
          <Subheader>Admin</Subheader>
          <MenuItem onTouchTap={this.handleClose}>Users</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Objects & Fields</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Workflows & Approvals</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Themes</MenuItem>
          <Divider />
          <Subheader>Account</Subheader>
          <MenuItem onTouchTap={this.handleClose}>My Apps</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Settings</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Sign out</MenuItem>
        </Drawer>
      </div>
    );
  }
}
