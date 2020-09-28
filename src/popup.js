import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from '@containers/User/components/Authentication';
import withApplicationSetup from '@containers/Application/with-Application-setup';

const Popup = withApplicationSetup(() => {
  return <Authentication />;
});

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
