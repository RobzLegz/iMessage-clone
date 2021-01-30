import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat-info">
                <h3>ChannelName</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
