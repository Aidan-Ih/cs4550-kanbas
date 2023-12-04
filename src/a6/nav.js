import { Link, useLocation } from "react-router-dom";
import "./index.css"
function Nav() {
  const { pathname } = useLocation();
  return (
    <div className="list-group">
      <Link to="/a6/signin" className={`list-group-item w-100 navbar-item ${pathname.includes("signin") ? "active" : ""}`}>
        Signin
      </Link>
      <Link to="/a6/account" className={`list-group-item w-100 navbar-item ${pathname.includes("account") ? "active" : ""}`}>
        Account
      </Link>
      <Link to="/a6/signup" className={`list-group-item w-100 navbar-item ${pathname.includes("signup") ? "active" : ""}`}>
        Signup
      </Link>

    </div>
  );
}
export default Nav;