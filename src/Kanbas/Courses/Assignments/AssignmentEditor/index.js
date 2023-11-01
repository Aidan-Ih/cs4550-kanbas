
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router-dom";
import "./assignment_editor.css"
import { useSelector, useDispatch } from "react-redux";
import { setAssignment, addAssignment, updateAssignment } from "../assignmentReducer";

const AssignmentEditor = () => {

    const dispatch = useDispatch()
    const { courseId } = useParams();
    const { assignmentId } = useParams();

    const assignments = useSelector((state) => state.assignmentReducer.assignments)

    var this_assignment = useSelector((state) => state.assignmentReducer.assignment)

    const navigate = useNavigate();
    const handleSave = () => {
        if (assignmentId === "new-assignment") {
            dispatch(addAssignment(this_assignment))
        }
        else {
            dispatch(updateAssignment(this_assignment))
        }
        
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="col-xxl-10 col-xl-10 col-md-9">
            <div className="">
                <div className="d-flex flex-row">
                    <div className="ms-auto">
                        <button type="button" className="btn btn-secondary">+ Group </button>
                        <button type="button" className="btn btn-danger">+ Assignment</button>
                    </div>
                </div>

                <hr />

                <label htmlFor="assignment_name">Assignment Name</label>
                <input id="assignment_name"
                    type="text"
                    className="form-control"
                    onChange={(e) => dispatch(setAssignment({ ...this_assignment, title: e.target.value }))}
                    value={this_assignment.title} />
                <br />
                <textarea
                    className="form-control"
                    onChange={(e) => dispatch(setAssignment({ ...this_assignment, desc: e.target.value }))}
                    value={this_assignment.desc}>
                    {this_assignment.desc}
                </textarea>
                <br />

                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">Assign</div>
                    <div className="col-5">
                        <form className="form-control">
                            <br />
                            <b>Due</b><br />
                            <input className="form-input" type="date" value={this_assignment.due}
                                onChange={(e) => dispatch(setAssignment({ ...this_assignment, due: e.target.value }))} />
                            <br /><br />

                            <div className="row">
                                <div className="col"><b>Available From</b></div>
                                <div className="col"><b>Until</b></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input className="form-input" type="date" value={this_assignment.from}
                                        onChange={(e) => dispatch(setAssignment({ ...this_assignment, from: e.target.value }))} />
                                </div>
                                <div className="col">
                                    <input className="form-input"
                                     type="date" 
                                     value={this_assignment.until}
                                        onChange={(e) => dispatch(setAssignment({ ...this_assignment, until: e.target.value }))} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <hr />

                <div className="d-flex">
                    <div className="ms-auto">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-secondary">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-danger me-2">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignmentEditor;