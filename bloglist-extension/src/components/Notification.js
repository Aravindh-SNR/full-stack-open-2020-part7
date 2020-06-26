import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../actions/notification';

// Component to display a notification using the given message (and type, for stylistic purposes)

const Notification = () => {
    const { message, type } = useSelector(state => state.notification);
    const dispatch = useDispatch();

    // Display notification message for 5 seconds
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                dispatch(setNotification(null, ''));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message, dispatch]);

    return (
        message ?
            <div className={type}>
                {message}
            </div>
            :
            null
    );
};

export default Notification;