/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import TopNav from 'components/TopNav';
import messages from './messages';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const Hero = styled.div`
  background-color: #2d353f;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  color: #fff;
  width: 100%;
  display: inline-block;
  text-align: center;
  padding: 15px;
  margin-left: auto;
  margin-right: auto
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TopNav />
        <Hero>
          <h1 style={{fontWeight: 100}}>App builder for business</h1>
          <h2 style={{fontWeight: 100}}>Build, launch, and manage modern enterprise web applications without writing code.</h2>
          <RaisedButton label="Get Started" primary={true} />
        </Hero>
        <Container>
          <Card>
            <CardTitle title="Sales CRM" subtitle="Leads, Contacts, Accounts, Opportunities, Reports, Dashboards" />
            <CardText>
              Simple CRM for sales teams
            </CardText>
            <CardActions>
              <FlatButton label="Preview" />
              <FlatButton label="Create" />
            </CardActions>
          </Card>
          <Card>
            <CardTitle title="Customer Service" subtitle="Contacts, Accounts, Cases, Articles, Reports, Dashboards" />
            <CardText>
              Manage, escalate, and resolve customer service cases
            </CardText>
            <CardActions>
              <FlatButton label="Preview" />
              <FlatButton label="Create" />
            </CardActions>
          </Card>
        </Container>
      </div>
    );
  }
}
