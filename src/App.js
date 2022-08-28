import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const AddUserHandler = (user) => {
    console.log(user);
    setUsers([...users, user]);
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
