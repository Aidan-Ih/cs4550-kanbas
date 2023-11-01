import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FaBars } from "react-icons/fa6";
import "./courses.css"
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor"
import { useParams } from "react-router-dom";
import ModulesWithList from "./Modules/ModulesWithList";


function Courses( {courses}) {
    const location = useLocation();
    const pathname = location.pathname;
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId)

    const arr = pathname.split("/")
    // get rid of first 3 items, leave only the items to put into the breadcrumb
    arr.shift()
    arr.shift()
    arr.shift()

    const last_breadcrumb = arr.pop()

    return (
        <div>
            <div className="d-flex">
                <FaBars className="wd-bars" />
                <nav className="wd-breadcrumb" aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        {arr.map((elt) => {
                            return (
                                <li key={elt} className="breadcrumb-item">{elt}</li>
                            )
                        })}
                        <li key="final" className="breadcrumb-item breadcrumb-final">{last_breadcrumb}</li>
                    </ul>
                </nav>
            </div>

            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "280px",
                        top: "90px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home course={course}/>} />
                        <Route path="Modules" element={<ModulesWithList />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />

                        <Route path="Grades" element={<h1>I was incredibly stupid and did this whole assignment in 1 sitting so I will not be doing the extra credit</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;