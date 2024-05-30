import React, { useState } from "react";
import "./chat.css";
const Chat = () => {
  // 输入框文本
  const [Text, setText] = useState("");
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="userText">
            <span>Bella Young</span>
            <p>I love sunshine,spring and chocolate</p>
          </div>
        </div>
        <div className="icons">
          <img src="./more.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./more.png" alt="" />
          <img src="./more.png" alt="" />
          <img src="./more.png" alt="" />
        </div>
        <input type="text" placeholder="Send a Message" />
        <img className="emoji" src="./emoji.png" alt="" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
