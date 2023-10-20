import "./assignments.css"
import assignments from "../../Database/assignments.json"
import { useParams } from "react-router"
import { FaGripVertical, FaCheck } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Assignments = () => {

    const { courseId } = useParams();
    const course_assignments = assignments[courseId];
    console.log(course_assignments)

    return (
        <div>
            <div style={{ "paddingBottom": 50 }}>
                <span className="float-end">
                    <button type="button" className="btn btn-secondary tr-button">Collapse All</button>
                    <button type="button" className="btn btn-secondary tr-button">View Progress</button>
                    <span className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Publish All
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        </div>
                    </span>
                    <button type="button" className="btn btn-danger tr-button last-button">+ Module</button>
                </span >
            </div>
            <hr />

            <ul className="list-group">
                <li className="list-group-item list-group-item-secondary module-group-title">
                    Assignments
                    <div className="float-end">
                        <span className="wd-total rounded-pill">40% of Total</span>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <i className="fa fa-plus" aria-hidden="true"> </i>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"> </i>
                    </div>
                </li>
                {course_assignments.map((a) => {
                    return (
                        <li key={a.id} className="list-group-item list-group-item module-group-item">
                            <div className="d-flex">
                                <FaGripVertical className="wd-grip-sizing" />
                                <div>
                                    <div className="wd-assignment-title">
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${a.title}`}>{a.title}</Link>
                                    </div>
                                    <div className="wd-assignment-desc">
                                        {a.desc}
                                    </div>
                                    <div className="wd-assignment-desc">
                                        <b>Due:</b> {a.due} | 100pts
                                    </div>
                                </div>
                                <div className="ms-auto wd-assignment-check-pad">
                                    <FaCheck/>
                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Assignments;