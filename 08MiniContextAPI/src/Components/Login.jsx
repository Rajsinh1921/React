import React, { useContext, useState } from "react";
import userContext from "../ContextStore/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = () => {
    setUser({ username, password });
  };

  return (
    <>
      <center>
        <h2>Login here</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </center>
    </>
  );
}

export default Login;
