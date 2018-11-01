import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import store from '@/store'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Provider } from 'react-redux'
import kind from '@/components/kind'
import login from '@/components/login'
import register from '@/components/register'
import verify from '@/components/register/verify'
import search from '@/components/search'
import detail from '@/components/detail'
import result from '@/components/result'
import clickContent from '@/components/clickContent'
import set from '@/components/set'

import './main.scss'

ReactDOM.render(
    <ErrorBoundary>
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route path='/detail' component={ detail }></Route>
            <Route path='/set' component={ set }></Route>
            <Route path='/clickContent' component={ clickContent }></Route>
            <Route path='/result' component={ result }></Route>
            <Route path='/search' component={ search }></Route>
            <Route path='/verify' component={ verify }></Route>
            <Route path='/register' component={ register }></Route>
            <Route path='/login' component={ login }></Route>
            <Route path='/kind' component={ kind }></Route>
            <Route path='/' component={ App }></Route>
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
