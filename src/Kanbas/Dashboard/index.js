import "./dashboard.css"
import courses from "../Database/courses.json"
import { Link } from "react-router-dom"

const Dashboard = () => {

    return (
        <div>
            <h1 className="wd-dashboard-title">Dashboard</h1>
            <h2>Published Courses</h2>
            <div className="d-flex flex-row flex-wrap wd-dashboard">

                {
                    courses.map((course) => (
                        <div key={course._id} className="card wd-dashboard-item">
                            <div className="wd-card-box-blue"></div>
                            <div className="card-body">
                                <Link className="wd-card-title-blue" to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link>
                                <div className="wd-card-info-small">{course.number}-{course._id}</div>
                                <div className="wd-card-info-smaller">{course.startDate} - {course.endDate}</div>
                                <i className="fa-regular fa-pen-to-square wd-card-logo"></i>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )

}

export default Dashboard;