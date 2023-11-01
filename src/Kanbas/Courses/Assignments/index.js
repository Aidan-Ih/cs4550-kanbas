import "./assignments.css"
import { useParams } from "react-router"
import { FaGripVertical } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { setAssignment, deleteAssignment } from "./assignmentReducer";

const Assignments = () => {

    const { courseId } = useParams();
    var assignments = useSelector((state) => state.assignmentReducer.assignments)
    const dispatch = useDispatch()

    const clickNewAssignment = () => {
        dispatch(setAssignment({
            title: "New Assignment",
            desc: "New Description",
            due: "2023-09-01",
            from: "2023-09-01",
            to: "2023-09-01",
            course: courseId,
        }))
    }

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
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/new-assignment`}
                        type="button"
                        className="btn btn-danger tr-button last-button"
                        onClick={clickNewAssignment}>+ Assignment</Link>
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
                {assignments
                    .filter((a) => a.course === courseId)
                    .map((a) => {
                        return (
                            <li key={a.id} className="list-group-item list-group-item module-group-item">
                                <div className="d-flex">
                                    <FaGripVertical className="wd-grip-sizing" />
                                    <div>
                                        <div className="wd-assignment-title">
                                            <Link onClick={() => dispatch(setAssignment(a))} to={`/Kanbas/Courses/${courseId}/Assignments/${a.title}`}>{a.title}</Link>
                                        </div>
                                        <div className="wd-assignment-desc">
                                            {a.desc}
                                        </div>
                                        <div className="wd-assignment-desc">
                                            <b>Due:</b> {a.due} <b>Available From:</b> {a.from} <b>Until: </b> {a.until} | 100pts
                                        </div>
                                    </div>
                                    <button type="button"
                                        className="btn btn-danger ms-auto delete-button-sizing"
                                        onClick={() => dispatch(deleteAssignment(a.id))}>Delete</button>
                                </div>
                            </li>
                        )
                    })}

            </ul>
        </div >
    )
}

export default Assignments;