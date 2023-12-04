import Signin from "./Users/signin";
import Nav from "./nav";
import Account from "./Users/account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";
import { Routes, Route, Navigate } from "react-router-dom";
function Assignment6() {
    return (
        <div>
            <h1>ASSIGNMENT6</h1>
            <div className="d-flex flex-row">
                <Nav />
                <div className="p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="signin" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/users" element={<UserTable/>} />
                        <Route path="/signup" element={<Signup/>} />
                    </Routes>
                </div>

            </div>
        </div>

    );
}
export default Assignment6;