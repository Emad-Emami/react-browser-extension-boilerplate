import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
// import BlankComponent from '@components/BlankComponent';

const root = document.createElement('div');
const shadow = root.attachShadow({ mode: 'open' });
const appContainer = document.createElement('div');
shadow.appendChild(appContainer);
document.body.appendChild(root);

const App = () => {
  return <div />;
};

ReactDOM.render(<App />, appContainer);
