import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/mainTheme'
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootSaga from './sagas/index';
import rootReducer from './reducers';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  sagaMiddleware
);

const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log('current store:', store.getState()));

ReactDOM.render(
    <CssBaseline>
        <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={App} /> 
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/signup" component={Signup} />         
            </Switch>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </CssBaseline>
  , document.getElementById('root'));
  serviceWorker.register();
