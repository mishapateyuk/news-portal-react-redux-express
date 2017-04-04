import React from 'react';
import {connect} from 'react-redux';
import {auth} from '../actions/authActionCreators';
import {hideModal} from '../actions/modalActionCreators.js';

const mapActionsToProps = (dispatch) => ({
  auth: (login, password) => dispatch(auth(login, password)),
  hideModal: () => dispatch(hideModal()),
});

const mapStateToProps =
  (state) => ({
    message: state.userData.message,
  });

class Auth extends React.PureComponent {

  clickHandler() {
    const login = this.loginInput && this.loginInput.value;
    const pass = this.passwordInput && this.passwordInput.value;
    this.props.auth(login, pass)
      .then(() => {
        if (!this.props.message) this.props.hideModal();
      });
  };

  render() {
    return (
      <div>
        <h2>Authorization form</h2>
        <label className="login">
          Login: <input type="text" ref={(input) => this.loginInput = input} />
        </label>
        <label className="password">
          Password: <input type="password" ref={(input) => this.passwordInput = input} />
        </label>
        <button onClick={this.clickHandler.bind(this)} className="button">
          Sign in
        </button>
        <br />
        <span className="red">{this.props.message}</span>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Auth);
