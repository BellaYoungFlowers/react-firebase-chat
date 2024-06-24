import User from "./user/User";
import Chat from "./chat/Chat";
import Detail from "./detail/Detail";
import Login from "./login/Login";
const App = () => {
  const user = true;
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
    </div>
  );
};

export default App;
