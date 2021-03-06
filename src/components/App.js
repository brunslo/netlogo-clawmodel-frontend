import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/index";
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className='container-fluid'>
          {/*<Nav/>*/}
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route render={() => <p>Not Found</p>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
