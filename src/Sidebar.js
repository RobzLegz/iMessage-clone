import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SidebarChat from './SidebarChat';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './firebase';

const Sidebar = () => {

    const user = useSelector(selectUser);
    const [chats, setChats] = useState("");

    useEffect(() => {
        db.collection("chats").onSnapshot((snapshot) => setChats(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ))
    }, []);

    const addChat = () => {
        const chatName = prompt("Please enter a chat name");
        if(chatName){
            db.collection("chats").add({
                chatName: chatName,
            });
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar-avatar" />
                <div className="sidebar-input">
                    <SearchIcon />
                    <input type="text" placeholder="search"/>
                </div>
                <IconButton variant="outlined" className="sidebar-input-btn">
                    <RateReviewIcon onClick={addChat} />
                </IconButton>
            </div>
            <div className="sidebar-chats">
                {chats.map(({id, data:{chatName}}) => (
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;
