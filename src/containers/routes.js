import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './app';
import HomePageContainer from './homePage';
import LoginPageContainer from './loginPage';
import DashboardPageContainer from './dashboardPage';
import AddPostContainer from './addPost';

import requireAuth from '../hoc/requireAuth';

class Routes extends React.Component {
  render () {
    return (
        <App>
          <Switch>
            <Route exact={true} path='/' component={ HomePageContainer } />
            <Route exact={true} path='/login' component={ LoginPageContainer } />
            <Route exact={true} path='/dashboard' component={ requireAuth(DashboardPageContainer) } />
            <Route exact={true} path='/add-post' component={ requireAuth(AddPostContainer) } />
            <Redirect to="/"/>
          </Switch>
        </App>
    );
  }
}

export default Routes;
