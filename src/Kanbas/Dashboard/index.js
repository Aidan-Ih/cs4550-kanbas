import "./dashboard.css"
import { Link } from "react-router-dom"
import { React } from "react";

const Dashboard = ({ coursesState, newCourse, setNewCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) => {
    return (
        <div>
            <h1 className="wd-dashboard-title">Dashboard</h1>
            <h2>Published Courses</h2>
            <div className="d-flex flex-row">

                <div className="d-flex flex-row flex-wrap wd-dashboard">
                    {
                        coursesState.map((course) => (
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
                <div>
                    <div className="d-flex flex-row">
                        <input value={newCourse.name} className="wd-dashboard-input form-control"
                            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })} />
                        <input value={newCourse.number} className="wd-dashboard-input form-control"
                            onChange={(e) => setNewCourse({ ...newCourse, number: e.target.value })} />
                        <input value={newCourse.startDate} className="wd-dashboard-input form-control" type="date"
                            onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })} />
                        <input value={newCourse.endDate} className="wd-dashboard-input form-control" type="date"
                            onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })} />
                        <button className="wd-dashboard-input" onClick={addNewCourse} >
                            Add
                        </button>
                        <button className="wd-dashboard-input" onClick={updateCourse}>
                            Update
                        </button>
                    </div>
                    <div className="list-group">

                        {coursesState.map((course) => (
                            <Link key={course._id}
                                to={`/Kanbas/Courses/${course._id}`}
                                className="list-group-item">
                                {course.name}
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setNewCourse(course);
                                    }}>
                                    Edit
                                </button>

                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;