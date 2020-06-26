/* eslint-disable indent */
const blogs = (state = [], action) => {
    switch (action.type) {
        case 'INIT_BLOGS':
            return action.blogs;
        case 'CREATE_BLOG':
            return state.concat(action.blog);
        case 'REMOVE_BLOG':
            return state.filter(blog => blog.id !== action.id);
        case 'UPDATE_LIKES':
            return state.map(blog => blog.id === action.id ? action.blog : blog);
        default:
            return state;
    }
};

export default blogs;