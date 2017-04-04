import React from 'react';
import UserName from '../components/UserName.react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showModal} from '../actions/modalActionCreators';
import {logOut} from '../actions/authActionCreators';

const mapStateToProps =
  (state) => ({
    user: state.userData.user,
  });

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModal('AUTH')),
  logOut: () => dispatch(logOut()),
});

class Header extends React.PureComponent {

  signOutButton() {
    if (this.props.user !== 'Guest') {
      return (
        <button className="sign-in button" onClick={this.props.logOut}>
          Sign out
        </button>
      );
    }
  };

  render() {
    return (
      <header className="page-header clearfix">
        {this.signOutButton()}
        <button className="sign-in button" onClick={this.props.showModal}>Sign in</button>
        <UserName user={this.props.user}/>
      </header>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
