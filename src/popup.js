import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AuthenticatedRoute from '@containers/User/components/AuthenticatedRoute';
import Dashboard from '@containers/Dashboard';
import Authentication from '@containers/User/components/Authentication';
import withApplicationSetup from '@containers/Application/with-Application-setup';

const useStyles = makeStyles(() => ({
  '@global': {
    'html, body, #popup-root': {
      margin: 0,
      padding: 0,
      // height: '100%',
      // minHeight: '100%',
    },
  },
}));

const Popup = withApplicationSetup(() => {
  useStyles();
  return (
    <Router initialEntries={['/']} initialIndex={0}>
      <Switch>
        <Route path="/authentication" component={Authentication} />
        <AuthenticatedRoute path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
});

const root = document.createElement('div');
root.setAttribute('id', 'popup-root');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
