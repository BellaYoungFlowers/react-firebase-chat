import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";
const Chat = () => {
  // 输入框文本
  const [Text, setText] = useState("");
  // 控制表情框是否展示
  const [Open, setOpen] = useState(false);
  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleEmojiClick = (e) => {
    setText((pre) => pre + e.emoji);
    setOpen(false);
  };

  console.log(Text);
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
        <input
          type="text"
          placeholder="Send a Message"
          value={Text}
          onChange={handleInput}
        />
        <img
          className="emoji"
          src="./emoji.png"
          alt=""
          onClick={() => {
            setOpen(!Open);
          }}
        />
        <EmojiPicker open={Open} onEmojiClick={handleEmojiClick}></EmojiPicker>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
