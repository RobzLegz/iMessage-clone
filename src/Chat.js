import React, { useState } from 'react';
import "./Chat.css";
import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';
import Message from "./Message";

const Chat = () => {

    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <h4>To: <span className="roomName">Room Name</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat-messages">
                <Message />
            </div>
            <div className="chatInput">
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="iMessage"/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <IconButton>
                    <MicNoneIcon className="chatMic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;
