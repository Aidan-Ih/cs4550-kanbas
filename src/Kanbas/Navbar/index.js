import { Link, useLocation } from "react-router-dom"
import { FaUser, FaGauge, FaBook, FaCalendar, FaEnvelope, FaSlideshare, FaClock, FaArrowRightToBracket, FaQuestion } from "react-icons/fa6"

import "./navbar.css"

function NavBar() {
    const { pathname } = useLocation();

    return (
        <div className="list-group wd-navbar">
            <div className="wd-navbar-nu">N</div>
            <Link to={`/Kanbas/Account`}
                className={pathname.includes("Account") ? "wd-navbar-item-active" : "wd-navbar-item"}>
                <div>
                    <FaUser className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Account</div>
                </div>
            </Link>
            <Link to={`/Kanbas/Dashboard`}
                className={pathname.includes("Dashboard") ? "wd-navbar-item-active" : "wd-navbar-item"}>
                <div>
                    <FaGauge className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Dashboard</div>
                </div>
            </Link>
            <Link to={`/Kanbas/Courses`}
                className={pathname.includes("Courses") ? "wd-navbar-item-active" : "wd-navbar-item"}>
                <div>
                    <FaBook className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Courses</div>
                </div>
            </Link>
            <Link to={`/Kanbas/Calendar`}
                className={pathname.includes("Calendar") ? "wd-navbar-item-active" : "wd-navbar-item"}>
                <div>
                    <FaCalendar className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Calendar</div>
                </div>
            </Link>
            <Link to={`#`}
                className="wd-navbar-item ">
                <div className="wd-navbar-item">
                    <FaEnvelope className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Inbox</div>
                </div>
            </Link>
            <Link to={`#`}
                className="wd-navbar-item ">
                <div className="wd-navbar-item">
                    <FaClock className="wd-navbar-icon" />
                    <div className="wd-navbar-text">History</div>
                </div>
            </Link>
            <Link to={`#`}
                className="wd-navbar-item ">
                <div className="wd-navbar-item">
                    <FaSlideshare className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Studio</div>
                </div>
            </Link>
            <Link to={`#`}
                className="wd-navbar-item ">
                <div className="wd-navbar-item">
                    <FaArrowRightToBracket className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Commons</div>
                </div>
            </Link>
            <Link to={`#`}
                className="wd-navbar-item ">
                <div className="wd-navbar-item">
                    <FaQuestion className="wd-navbar-icon" />
                    <div className="wd-navbar-text">Help</div>
                </div>
            </Link>
            <div className="wd-navbar-item wd-navbar-take-height"></div>
        </div>
    )
}

export default NavBar;