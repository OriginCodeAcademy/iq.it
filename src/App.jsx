import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import Login from './Components/Login';
import Register from './Components/Register';
import Waiting from './Components/Waiting';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/waiting" component={Waiting} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.loginReducer.user
  };
}

export default connect(mapStateToProps)(App);
