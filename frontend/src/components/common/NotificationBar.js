import React from 'react';

const NotificationBar = ({ notifications }) => {
    return (
        <div className="notification-bar">
            {notifications && notifications.length > 0 ? (
                notifications.map((notification, index) => (
                    <div key={index} className="notification">
                        {notification.message}
                    </div>
                ))
            ) : (
                <div className="notification">No notifications</div>
            )}
        </div>
    );
};

export default NotificationBar;