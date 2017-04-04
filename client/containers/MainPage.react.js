import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Header from './Header.react';
import Footer from '../components/Footer.react';
import ModalWrapper from './ModalWrapper.react';
import {loadNews} from '../actions/newsActionCtreators';

const mapDispatchToProps = (dispatch) => ({
  loadNews: () => dispatch(loadNews()),
});

const mapStateToProps = (state) => ({
  user: state.userData.user,
  news: state.news.all,
});

class MainPage extends React.PureComponent {

  showButton() {
    if (this.props.user !== 'Guest') {
      return <Link to="/add" className="button add-news">Add news</Link>;
    } else {
      return null;
    };
  };

  componentDidMount() {
    if (this.props.news === null) {
      this.props.loadNews();
    } else {
      return;
    };
  };

  render() {
    return (
      <div>
        <ModalWrapper />
        <div className="wrapper">
          <Header />
          <div className="buttons-wrapper">
            {this.showButton()}
            <Link to="/" className="button add-news">Show news</Link>
          </div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
