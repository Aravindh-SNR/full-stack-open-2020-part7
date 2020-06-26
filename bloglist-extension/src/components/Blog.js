import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLikesInDb, removeBlogFromDb } from '../actions/blogs';
import PropTypes from 'prop-types';

// Component for displaying one blog

const Blog = ({ match }) => {
    // Extract blog id from url
    const { blogId } = match.params;

    const blogs = useSelector(state => state.blogs);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [blog, setBlog] = useState(null);

    // Get blog with matching id from redux store once it is initialized
    useEffect(() => {
        setBlog(blogs.find(blog => blog.id === blogId));
    }, [blogs, blogId]);

    return (
        blog ?
            <div className='blog'>
                <div className='blog-heading'>
                    <h2>{blog.title} | {blog.author}</h2>
                </div>

                <div className='blog-details'>
                    <p>
                        Link: <a href={blog.url} target='_blank' rel='noopener noreferrer'>{blog.url}</a>
                    </p>

                    <p>
                        Likes: {blog.likes}&nbsp;
                        <button
                            className='like-btn'
                            onClick={() => dispatch(updateLikesInDb(blog))}
                        >
                            Like
                        </button>
                    </p>

                    <p>
                        Added by: {blog.user.name}
                    </p>

                    {
                        blog.user.username === user.username &&
                        <button
                            className='remove-btn'
                            onClick={() => dispatch(removeBlogFromDb(blog.id, user.token))}
                        >
                            Remove
                        </button>
                    }
                </div>
            </div>
            :
            null
    );
};

Blog.propTypes = {
    match: PropTypes.object.isRequired
};

export default Blog;