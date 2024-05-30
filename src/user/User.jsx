import React from "react";
import "./user.css";
import UserInfo from "./userInfo/UserInfo";
import Search from "./search/Search";
import ChatList from "./chatList/ChatList";

const User = () => {
  return (
    <div className="user">
      <UserInfo></UserInfo>
      <Search></Search>
      <ChatList></ChatList>
    </div>
  );
};

export default User;
