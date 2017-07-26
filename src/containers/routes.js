import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './app';
// import auth from '../services/auth';
import HomePageContainer from './homePage';
import AuthPageContainer from './authPage';

// const redirect = (prevState, nextState, replace, cb) => {
//   if (!auth.isAuthenticated() && nextState.location.pathname !== '/login') {
//     replace('/login');
//     cb();
//     return;
//   }
//   cb();
// };
//
// class AppRouter extends React.Component {
//   constructor () {
//     super();
//     autobind(this);
//   }
//
//   onRootRouteEnter (nextState, replace, cb) {
//     redirect(null, nextState, replace, cb);
//   }
//
//   render () {
//     return (
//       <Router history={hashHistory}>
//         <Route
//           path="/"
//           component={App}
//           onEnter={this.onRootRouteEnter} >
//
//           <Route path=" " component={ } />
//           <Route path=" " component={ } />
//
//           <Route path="login" component={Login} />
//         </Route>
//       </Router>
//     );
//   }
// }

const Routes = () => {
  return (
      <App>
        <Switch>
          <Route exact={true} path='/' component={ HomePageContainer } />
          <Route exact={true} path='/auth' component={ AuthPageContainer } />
          <Redirect to="/"/>
        </Switch>
      </App>
  );
};

export default Routes;
