const user = localStorage.getItem('username') ||
  localStorage.setItem('username', 'Guest') ||
  localStorage.getItem('username');

const authReducer = (state = {user, message: '',}, action) => {
  switch(action.type) {
    case 'LOG_IN' :
      return Object.assign({}, state, {user: action.user, message: '',});
    case 'LOG_OUT' :
      return Object.assign({}, state, {user: 'Guest'});
    case 'AUTH_ERROR' :
      return Object.assign({}, state, {message: action.message});
    default :
      return state;
  };
};

export default authReducer;
