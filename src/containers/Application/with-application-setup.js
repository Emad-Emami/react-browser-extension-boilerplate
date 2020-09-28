import React from 'react';
import Application from './Application';

function withApplicationSetup(WrappedComponent) {
  return function WrappedComponentWithApplicationSetup(props) {
    return (
      <Application>
        <WrappedComponent {...props} />
      </Application>
    );
  };
}

export default withApplicationSetup;
