import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar className="sidebar-avatar" />
                <div className="sidebar-input">
                    <SearchIcon />
                    <input type="text" placeholder="search"/>
                </div>
                <IconButton variant="outlined" className="sidebar-input-btn">
                    <RateReviewIcon />
                </IconButton>
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
