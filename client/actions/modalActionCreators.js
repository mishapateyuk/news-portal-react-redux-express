import {showModalType, hideModalType} from '../constants/constants.js';

const showModal = (modalType) => ({
  type: showModalType,
  modalType,
});

const hideModal = () => ({
  type: hideModalType,
  modalType: null,
});

export {showModal, hideModal};
