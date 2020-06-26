import axios from 'axios';
const baseUrl = '/api/blogs';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const create = async (blog, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const response = await axios.post(baseUrl, blog, config);
    return response.data;
};

const update = async (id, updatedBlog) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedBlog);
    return response.data;
};

const remove = async (id, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const response = await axios.delete(`${baseUrl}/${id}`, config);
    return response.status;
};

export default { getAll, create, update, remove };