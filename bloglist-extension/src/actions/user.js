import loginService from '../services/login';
import { setNotification } from './notification';

// Set user while logging in or logging out
export const setUser = user => ({ type: 'SET_USER', user });

// Log a user in
export const logInUser = user => {
    return async dispatch => {
        try {
            const loggedInUser = await loginService.logIn(user);
            dispatch(setUser(loggedInUser));
            localStorage.setItem('user', JSON.stringify(loggedInUser));
        } catch (error) {
            dispatch(setNotification(error.response.data.error, 'error'));
        }
    };
};