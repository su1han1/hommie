import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './reducers'
import { ThemeProvider } from "@material-ui/styles"
import theme from "./theme";
import { Router, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { history } from './reducers/index'
import Front from "./containers/Front"
import { CssBaseline } from '@material-ui/core';

export default () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Router history={history}>
            <div>
                <Route exact component={Front} />
            </div>
          </Router>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}