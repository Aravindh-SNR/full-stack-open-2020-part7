/* eslint-disable indent */
const notification = (state = { message: null, type: '' }, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return { message: action.notification.message, type: action.notification.type };
        default:
            return state;
    }
};

export default notification;