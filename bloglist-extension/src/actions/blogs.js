import blogService from '../services/blogs';
import { setNotification } from './notification';

// Initialize blogs
const initializeBlogs = blogs => ({ type: 'INIT_BLOGS', blogs });

// Create a blog
const createBlog = blog => ({ type: 'CREATE_BLOG', blog });

// Remove a blog
const removeBlog = id => ({ type: 'REMOVE_BLOG', id });

// Update likes of a blog
const updateLikes = (id, blog) => ({ type: 'UPDATE_LIKES', id, blog });

// Fetch blogs from DB
export const fetchBlogsFromDb = () => {
    return async dispatch => {
        try {
            const blogs = await blogService.getAll();
            dispatch(initializeBlogs(blogs));
        } catch (error) {
            dispatch(setNotification(error.response.data.error, 'error'));
        }
    };
};

// Add blog in DB
export const createBlogInDb = (blog, token) => {
    return async dispatch => {
        try {
            const newBlog = await blogService.create(blog, token);
            dispatch(createBlog(newBlog));
            dispatch(setNotification(`A new blog ${newBlog.title} by ${newBlog.author} added`, 'info'));
        } catch (error) {
            dispatch(setNotification(error.response.data.error, 'error'));
        }
    };
};

// Remove blog from DB
export const removeBlogFromDb = (id, token) => {
    return async dispatch => {
        try {
            const status = await blogService.remove(id, token);
            status === 204 && dispatch(removeBlog(id));
        } catch (error) {
            dispatch(setNotification(error.response.data.error, 'error'));
        }
    };
};

// Update likes of a blog in DB
export const updateLikesInDb = blog => {
    return async dispatch => {
        try {
            const updatedBlog = await blogService.update(blog.id, { likes: blog.likes + 1 });
            dispatch(updateLikes(updatedBlog.id, updatedBlog));
        } catch (error) {
            dispatch(setNotification(error.response.data.error, 'error'));
        }
    };
};