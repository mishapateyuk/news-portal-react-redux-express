const modalReducer = (state={show: false, modalType: null}, action) => {
  switch (action.type) {
    case 'SHOW_MODAL' :
      return {showModal: true, modalType: action.modalType};
    case 'HIDE_MODAL' :
      return {showModal: false, modalType: action.modalType};
    default :
      return state;
  };
};

export default modalReducer;
