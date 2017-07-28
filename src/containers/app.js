import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { withRouter } from 'react-router';
import { loginUserSuccess, logoutUserSuccess } from '../actions/auth';
import LoaderContainer from './loader';
import Header from '../components/Header';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.props.loginUserSuccess(user);
      } else {
        this.props.logoutUserSuccess();
        // this.props.history.push('/');
      }
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          { this.props.children }
        </div>
        <LoaderContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserSuccess: (user) => dispatch(loginUserSuccess(user)),
    logoutUserSuccess: () => dispatch(logoutUserSuccess())
  };
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));
