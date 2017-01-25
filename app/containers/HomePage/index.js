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
import messages from './messages';
import RaisedButton from 'material-ui/RaisedButton';
import TopNav from 'components/AppBar';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TopNav />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <RaisedButton
          disabled={false}
          label="Material-UI Raised Button"
          labelPosition="after"
          primary={true}
          secondary={false}
        />
      </div>
    );
  }
}
