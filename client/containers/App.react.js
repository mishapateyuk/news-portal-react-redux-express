import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import {connect} from 'react-redux';

import MainPage from './MainPage.react';
import NewsList from './NewsList.react';
import AddNews from './AddNews.react';
import EditNews from './EditNews.react';

import NewsDetail from '../components/NewsDetail.react';
import ErrorPage from '../components/ErrorPage.react';
import RemoveNews from '../components/RemoveNews.react';

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

class App extends React.PureComponent {
  constructor() {
    super();
    this.requireAuth = this.requireAuth.bind(this);
  };

  requireAuth(nextState, replace) {
    if (this.props.user === 'Guest') {
        replace({
        pathname: '/error',
      });
    }
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainPage}>
          <IndexRoute component={NewsList} />
          <Route path='/detail/:id' component={NewsDetail} />
          <Route path='/add' component={AddNews} onEnter={this.requireAuth} />
          <Route path='/edit/:id' component={EditNews} onEnter={this.requireAuth} />
          <Route path='/remove/:id' component={RemoveNews} onEnter={this.requireAuth} />
          <Route path='/error' component={ErrorPage} />
        </Route>
      </Router>
    );
  };
};

App.propTypes = {
  user: React.PropTypes.string,
};

export default connect(mapStateToProps, null)(App);
