import React, { useContext } from "react";
import userContext from "../ContectStore/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  return (
    <center>
      {user ? <h1>Welcome {user.username}</h1> : <h1>User Not Loggedin</h1>}
    </center>
  );
}

export default Profile;
