import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as firebase from 'firebase';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/')
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: firebase.auth().currentUser //change to get value from state
    };
  }

  return withRouter(connect(mapStateToProps)(Authenticate));
}
