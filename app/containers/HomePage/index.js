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
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TopNav />
        <Hero>
          <h1
            style={{
              fontWeight: 100
            }}>
            Book hotels for groups and events
          </h1>
        </Hero>
      </div>
    );
  }
}
