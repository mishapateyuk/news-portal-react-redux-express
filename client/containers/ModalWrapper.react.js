import React from 'react';
import Modal from '../components/Modal.react';
import Auth from '../components/Auth.react';
import Filters from './Filters.react';
import {connect} from 'react-redux';

const mapStateToProps = ({modal}) => ({
  modal,
});

class ModalWrapper extends React.PureComponent {

  modalChildren() {
    switch (this.props.modal.modalType) {
      case 'AUTH' :
        return <Auth />
      case 'FILTERS' :
        return <Filters />
      default :
        return null;
    };
  };

  render () {
    if (this.props.modal.showModal) {
      return (
        <Modal>
          {this.modalChildren()}
        </Modal>
      );
    } else {
      return null;
    };
  };
};

export default connect(mapStateToProps, null)(ModalWrapper);
