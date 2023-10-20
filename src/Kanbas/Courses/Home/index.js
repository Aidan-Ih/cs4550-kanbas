import Modules from "../Modules";
import "./home.css"
import { FaClock } from "react-icons/fa6";

const Home = (course_id) => {
    return (
        <div className="d-flex flex-row">
            <div className="modules">
                <Modules />
            </div>

            <div className="side-buttons">
                <div>
                    <div className="d-grid">
                        <button className="btn btn-secondary" type="button">Import Existing Content</button>
                        <button className="btn btn-secondary" type="button">Import From Commons</button>
                        <button className="btn btn-secondary" type="button">Choose Home Page</button>
                        <button className="btn btn-secondary" type="button">View Course Stream</button>
                        <button className="btn btn-secondary" type="button">New Announcement</button>
                        <button className="btn btn-secondary" type="button">New Analytics</button>
                        <button className="btn btn-secondary" type="button">View Course Notifications</button>
                    </div>
                </div>
                <br />

                <h4 className="todo-title">To Do</h4>
                <hr />

                <div className="d-flex flex-row">
                    <FaClock className="clock"/>
                    <div className="todo-item">
                        <div><b>Grade A1</b></div>
                        <div>100pts</div>
                    </div>
                </div>
                <br/>
                <div className="d-flex flex-row">
                    <FaClock className="clock"/>
                    <div className="todo-item">
                        <div><b>Office Hours</b></div>
                        <div>3:00 PM</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;