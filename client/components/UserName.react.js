import React from 'react';
import {connect} from 'react-redux';

class UserName extends React.PureComponent {
  render() {
    return (
      <span className="user-name">
        <b>Signed in as: </b>
        {this.props.user}
      </span>
    );
  };
};

UserName.propTypes = {
  user: React.PropTypes.string,
};

export default UserName;
