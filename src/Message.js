import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Message.css";

const Message = ({id, contents: {timestamp, displayName, email, message, photo, uid}}) => {

    const user = useSelector(selectUser);

    return (
        <div className={`message ${user.email === email && "messageSender"}`}>
            <Avatar className="messagePhoto" src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleDateString()}</small>
        </div>
    );
}

export default Message;
