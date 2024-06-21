import React, { useEffect, useRef, useState } from "react";
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

  // 每次进入聊天页面，定位到最新一条消息
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <img src="./taylor.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quae, accusantium praesentium cumque et similique facere sit in
              omnis a esse veritatis inventore eos eaque culpa deserunt eius
              molestias nihil!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Send a Message"
          value={Text}
          onChange={handleInput}
        />
        <div className="emoji">
          <img
            className="emoji"
            src="./emoji.png"
            alt=""
            onClick={() => {
              setOpen(!Open);
            }}
          />
          <div className="picker">
            <EmojiPicker
              open={Open}
              onEmojiClick={handleEmojiClick}
            ></EmojiPicker>
          </div>
        </div>

        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
