import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/a6/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="form-group">
        <div className="d-flex flex-row">
          <laber for="username">Username: </laber>
          <input id="username" className="form-control"
            value={credentials.username}
            onChange={(e) => setCredentials({
              ...credentials,
              username: e.target.value
            })} />
        </div>
        <div className="d-flex flex-row ">
          <label for="password">Password:</label>
          <input id="password" className="form-control"
            value={credentials.password}
            onChange={(e) => setCredentials({
              ...credentials,
              password: e.target.value
            })} />
        </div>
      </div>
      <button className="btn btn-secondary" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;