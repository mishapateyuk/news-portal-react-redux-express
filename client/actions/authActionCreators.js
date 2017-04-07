import {checkAuthorizationData} from '../models/authorizationModel';
import {logInType, logOutType, authErrorType} from '../constants/constants.js';
import {jsonAJAX} from '../services/AJAX.js';

const logIn = (user) => (dispatch) => {
  localStorage.setItem('username', user);
  dispatch({
    type: logInType,
    user,
  });
};

const logOut = () => (dispatch) => {
  localStorage.setItem('username', 'Guest');
  dispatch({
    type: logOutType,
  });
};

const auth = (login, password) => (dispatch) => {
    return jsonAJAX('post', '/api/auth', JSON.stringify({login, password}))
        .then((response) => {
            if (response === 'true') {
                dispatch(logIn(login));
            } else {
                dispatch(authError('Incorrect login or password'));
            };
        });
};

const authError = (message) => ({
  type: authErrorType,
  message,
});

export {auth, logIn, logOut};
