/* eslint-disable indent */
const user = (state = JSON.parse(localStorage.getItem('user')), action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.user;
        default:
            return state;
    }
};

export default user;