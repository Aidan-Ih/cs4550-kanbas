import { Link, useParams, useLocation } from "react-router-dom";
import "./courses.css"
function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-profile-sidebar" >
            {links.map((link, index) => (
                <Link 
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "selected"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default CourseNavigation;