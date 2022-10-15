import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import React, {useState} from 'react'
import {db, auth} from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
    });
    
    setMessage("");
  }
  return (
    <div>
        <form onSubmit={sendMessage} action="">
            <div className="sendMsg">
                <Input 
                    style={{ 
                        width: "70%",
                        fontSize: "15px",
                        fontHeight: "550",
                        marginLeft: "5px",
                        marginBottom: "-3px",
                     }} 
                    placeholder='メッセージを入力してください' type="text"
                    onChange={(e) => handleMessage(e)}
                    value={message}
                />
                <SendIcon 
                    style={{ 
                        color: "#7AC2FF",
                        marginLeft: "20px"
                     }}
                />
            </div>
        </form>
    </div>
  )
}

export default SendMessage
