import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import defaultTheme from '@themes/default';
import { getQueries } from './configure-store';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import { Store } from 'webext-redux';

const store = new Store();

export default function Application({ children }) {
  const [storeLoaded, setStoreLoaded] = useState(false);
  useEffect(() => {
    store.ready().then(() => {
      setStoreLoaded(true);
    });
  }, []);
  if (storeLoaded) {
    return (
      <Provider store={store}>
        <ReduxQueryProvider queriesSelector={getQueries}>
          {/* @TODO: Separate the theme component */}
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </ReduxQueryProvider>
      </Provider>
    );
  }
  return false;
}

Application.propTypes = {
  children: PropTypes.node,
};
