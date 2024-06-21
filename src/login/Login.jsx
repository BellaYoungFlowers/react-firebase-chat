import { useState } from "react";
import "./login.css";
const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  // 点击上传头像，立刻展示图片
  const handleAvater = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <>
      <div className="login">
        <div className="item">
          <h2>Welcome Back</h2>
          <form>
            <input type="text" name="email" placeholder="邮箱" />
            <input type="password" name="password" placeholder=" 密码" />
            <button>SIGNIN</button>
          </form>
        </div>

        <div className="seperator"></div>

        <div className="item">
          <h2>SIGNUP</h2>
          <form>
            <label htmlFor="file">
              <img src={avatar.url || "./avatar.png"} alt="" />
              点击上传头像
            </label>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvater}
            />
            <input type="text" name="email" placeholder="邮箱" />
            <input type="text" name="name" placeholder="用户名" />
            <input type="password" name="password" placeholder="密码" />
            <button>SIGNUP</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
