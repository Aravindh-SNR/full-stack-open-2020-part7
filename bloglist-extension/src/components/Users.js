import React, { useState, useEffect } from 'react';
import userService from '../services/users';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    h2 {
        margin-bottom: 0.5%;
    }
`;

// Component for displaying all users

const Users = () => {
    const [users, setUsers] = useState([]);

    // Get list of users from back end
    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(() => {
                setUsers([]);
            });
    }, []);

    return (
        <Wrapper>
            <h2>Users</h2>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Blogs created</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <Link to={{
                                        pathname: `/users/${user.id}`,
                                        state: user
                                    }}>
                                        {user.name}
                                    </Link>
                                </td>
                                <td>
                                    {user.blogs.length}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Wrapper>
    );
};

export default Users;