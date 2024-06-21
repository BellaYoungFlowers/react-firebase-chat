import React from "react";
import "./detail.css";
const List = () => {
  return (
    <div className="list">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <span>Bella Young</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem optio
          nobis hic sapiente asperiores suscipit voluptate fuga, debitis
          nesciunt aut molestiae ab sunt est neque incidunt voluptates. Aliquam,
          blanditiis quo.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <div className="iconImage">
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <div className="iconImage">
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <div className="iconImage">
              <img src="./arrowDown.png" alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="./taylor.jpg" alt="" />
              <span>2024-09.jpg</span>
            </div>
            <div className="iconImage">
              <img src="./download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <div className="iconImage">
              <img src="./arrowDown.png" alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="./taylor.jpg" alt="" />
              <span>2024-09.jpg</span>
            </div>
            <div className="iconImage">
              <img src="./download.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="botton_group">
        <button id="block">Block User</button>
        <button id="logout">Logout</button>
      </div>
    </div>
  );
};

export default List;
