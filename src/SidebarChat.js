import { Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from './features/chatSlice';
import "./SidebarChat.css";

const SidebarChat = ({id, chatName}) => {

    const dispatch = useDispatch();
    

    return (
        <div className="sidebarChat" onClick={() => 
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,
                })
            )
        } >
            <Avatar />
            <div className="sidebarChat-info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
