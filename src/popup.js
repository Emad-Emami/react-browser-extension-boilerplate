import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
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
  return <Authentication />;
});

const root = document.createElement('div');
root.setAttribute('id', 'popup-root');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
