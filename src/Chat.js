import React, { useState } from 'react';
import "./Chat.css";

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
            <div className="chatInput">
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="iMessage"/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;
