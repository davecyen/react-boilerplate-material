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
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import TopNav from 'components/TopNav';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const AppContent = styled.div`
      -moz-transition: left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      -o-transition: left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      -webkit-transition: left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      transition: left 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      background-color: red;
      display: inline-block;
      width: 100%;
    `;
    return (
      <div>
        <TopNav />
        <AppContent>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </AppContent>
      </div>
    );
  }
}
