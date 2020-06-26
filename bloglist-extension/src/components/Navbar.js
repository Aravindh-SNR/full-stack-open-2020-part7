import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setUser } from '../actions/user';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: #ccc;
    padding: 0.5%;
    *:not(:last-child) {
        margin-right: 1%;
    }
`;

const Navbar = ({ user }) => {
    const dispatch = useDispatch();

    // Log out user
    const logOut = () => {
        dispatch(setUser(null));
        localStorage.clear();
    };

    return (
        <Wrapper>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <div>{user.name} logged in</div>
            <button id='logout-btn' onClick={logOut}>Log out</button>
        </Wrapper>
    );
};

export default Navbar;