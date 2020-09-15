import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Example from '@components/Example';

const Popup = () => {
  return <Example />;
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
