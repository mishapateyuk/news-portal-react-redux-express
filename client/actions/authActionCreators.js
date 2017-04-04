import {checkAuthorizationData} from '../models/authorizationModel';
import {logInType, logOutType, authErrorType} from '../constants/constants.js';

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

const auth = (login, pass) => (dispatch) => {
    return checkAuthorizationData(login, pass)
        .then((response) => {
            if (response) {
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
