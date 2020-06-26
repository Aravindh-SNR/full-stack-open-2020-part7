import React from 'react';
import { useHistory } from 'react-router-dom';

// Component for displaying one user

const User = () => {
    const history = useHistory();
    const user = history.location.state;

    return (
        user ?
            <div>
                <h2>{user.name}</h2>
                {
                    user.blogs.length > 0 ?
                        <>
                            <h3>Added blogs:</h3>
                            <ul>
                                {
                                    user.blogs.map(blog => (
                                        <li key={blog.id}>
                                            {blog.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                        :
                        <div>Nothing yet.</div>
                }
            </div>
            :
            null
    );
};

export default User;