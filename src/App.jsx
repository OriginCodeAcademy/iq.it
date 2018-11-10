import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './Components/Game';
import Login from './Components/Login';
import Confirmation from './Components/Confirmation';
import Register from './Components/Register';
import Waiting from './Components/Waiting';
import AddCard from './Components/AddCard';
import ManageCard from './Components/ManageCard';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/waiting" component={Waiting} />
            <Route path="/game" component={Game} />
            <Route path="/addCard" component={AddCard} />
            <Route path="/manageCard" component={ManageCard} />
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
