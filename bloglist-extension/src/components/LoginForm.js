import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../actions/user';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // Log the user in
    const logIn = event => {
        event.preventDefault();
        dispatch(logInUser({ username, password }));
    };

    return (
        <div>
            <h2>Log in to the application</h2>

            <form id='login-form' onSubmit={logIn}>
                <div className='form-field'>
                    <label htmlFor='username'>Username: </label>
                    <input id='username' value={username} autoComplete='off' autoFocus required
                        onChange={({ target }) => setUsername(target.value)} />
                </div>

                <div className='form-field'>
                    <label htmlFor='password'>Password: </label>
                    <input id='password' value={password} autoComplete='off' required
                        onChange={({ target }) => setPassword(target.value)} />
                </div>

                <div>
                    <button id='login-btn' type='submit'>Log in</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;