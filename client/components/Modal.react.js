import React from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../actions/modalActionCreators';

const mapActionsToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
});

class Modal extends React.PureComponent {

  render() {
    return (
     <div className='modal'>
        <div className="modal-wrapper">
          <div className="close" onClick={this.props.hideModal} />
          {this.props.children}
        </div>
      </div>
    );
  };
};

export default connect(null, mapActionsToProps)(Modal);
