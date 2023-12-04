import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
  };
  return (
    <div>
      <div className="form-control">
        <div>
          <label for="username-input">Username:</label>
          <input id="username-input" className="form-text" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        </div>
        <div>
          <label for="password-input">Password:</label>
          <input id="password-input" className="form-text" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
          <button className="btn btn-secondary" onClick={signin}> Signin </button>
        </div>
      </div>
    </div>

  );
}
export default Signin;