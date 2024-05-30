import User from "./user/User";

import Chat from "./chat/Chat";
import List from "./list/List";
const App = () => {
  return (
    <div className="container">
      <User></User>
      <Chat></Chat>
      <List></List>
    </div>
  );
};

export default App;
