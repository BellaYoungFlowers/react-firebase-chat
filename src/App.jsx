import User from "./user/User";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import Login from "./login/Login";
import Notification from "./component/Notification";
const App = () => {
  const user = false;
  return (
    <div className="container">
      {user ? (
        <>
          <User></User>
          <Chat></Chat>
          <Detail></Detail>
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
