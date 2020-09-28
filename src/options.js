import React from 'react';
import ReactDOM from 'react-dom';
import BlankComponent from '@components/BlankComponent';

const OptionsPage = () => {
  return <BlankComponent />;
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
