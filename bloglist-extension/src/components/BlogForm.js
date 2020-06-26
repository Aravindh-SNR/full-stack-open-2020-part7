import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlogInDb } from '../actions/blogs';
import PropTypes from 'prop-types';

// Component for displaying one blog

const BlogForm = ({ user, hideBlogForm }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    const dispatch = useDispatch();

    // Create new blog
    const createBlog = event => {
        event.preventDefault();
        dispatch(createBlogInDb({ title, author, url }, user.token));
        hideBlogForm();
        setTitle('');
        setAuthor('');
        setUrl('');
    };

    return (
        <div>
            <h2>Create new blog</h2>

            <form onSubmit={createBlog}>
                <div className='form-field'>
                    <label htmlFor='title'>Title: </label>
                    <input id='title' value={title} onChange={({ target }) => setTitle(target.value)}
                        autoComplete='off' required />
                </div>

                <div className='form-field'>
                    <label htmlFor='author'>Author: </label>
                    <input id='author' value={author} onChange={({ target }) => setAuthor(target.value)}
                        autoComplete='off' required />
                </div>

                <div className='form-field'>
                    <label htmlFor='url'>URL: </label>
                    <input id='url' value={url} onChange={({ target }) => setUrl(target.value)}
                        autoComplete='off' required />
                </div>

                <div>
                    <button id='create-blog-btn' type='submit'>Create</button>
                </div>
            </form>
        </div>
    );
};

BlogForm.propTypes = {
    user: PropTypes.object.isRequired,
    hideBlogForm: PropTypes.func.isRequired
};

export default BlogForm;