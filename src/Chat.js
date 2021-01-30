import React, { useEffect, useState } from 'react';
import "./Chat.css";
import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';
import Message from "./Message";
import { selectChatId, selectChatName } from './features/chatSlice';
import { useSelector } from 'react-redux';
import db from './firebase';
import firebase from "firebase";
import { selectUser } from './features/userSlice';


const Chat = () => {

    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const chatName = useSelector(selectChatName)
    const chatId = useSelector(selectChatId);

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        });
    }

    useEffect(() => {
        if(chatId){
            db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ));
        }
    }, [chatId])

    return (
        <div className="chat">
            <div className="chat-header">
                <h4>To: <span className="roomName">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat-messages">
                {messages.map(({id, data}) => (
                    <Message key={id} id={id} contents={data} />
                ))}
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
