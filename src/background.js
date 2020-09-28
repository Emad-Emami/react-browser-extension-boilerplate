import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { wrapStore } from 'webext-redux';
import configureStore, {
  getQueries,
} from '@containers/Application/configure-store';
import UserCookieReconciler from '@containers/User/components/UserCookieReconciler';
import { Provider as ReduxQueryProvider } from 'redux-query-react';

const store = configureStore();
wrapStore(store);

export default function BackgroundApplication() {
  return (
    <Provider store={store}>
      <ReduxQueryProvider queriesSelector={getQueries}>
        <UserCookieReconciler>Background application</UserCookieReconciler>
      </ReduxQueryProvider>
    </Provider>
  );
}

BackgroundApplication.propTypes = {
  children: PropTypes.node,
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<BackgroundApplication />, root);
