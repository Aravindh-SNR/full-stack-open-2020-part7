import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogForm from './BlogForm';
import Togglable from './Togglable';
import PropTypes from 'prop-types';
import { fetchBlogsFromDb } from '../actions/blogs';
import { Link } from 'react-router-dom';

// Component for displaying all blogs

const Blogs = ({ user }) => {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    const blogFormRef = useRef();

    // Get all blogs from DB once user is logged in
    useEffect(() => {
        dispatch(fetchBlogsFromDb());
    }, [dispatch]);

    // Hide blog form after a blog is created
    const hideBlogForm = () => {
        blogFormRef.current.toggleVisibility();
    };

    const blogStyle = {
        padding: 10,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    };

    return (
        <div>
            <h2>Blogs</h2>

            <Togglable buttonLabel='Create new blog' ref={blogFormRef}>
                <BlogForm user={user} hideBlogForm={hideBlogForm} />
            </Togglable>

            <div id='blogs'>
                {
                    []
                        .concat(blogs)
                        .sort((firstBlog, secondBlog) => secondBlog.likes - firstBlog.likes)
                        .map(blog => (
                            <div key={blog.id} style={blogStyle}>
                                <Link to={`/blogs/${blog.id}`}>
                                    {blog.title} | {blog.author}
                                </Link>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    user: PropTypes.object.isRequired
};

export default Blogs;