
import assignments from "../../../Database/assignments.json"
import { useParams } from "react-router"
import { Link, useNavigate } from "react-router-dom";
import "./assignment_editor.css"

const AssignmentEditor = () => {

    const { courseId } = useParams();
    const { assignmentId } = useParams();

    const course_assignments = assignments[courseId]

    const this_assignment = course_assignments.find((a) => {
        return a.title === assignmentId
    })

    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
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
                <input id="assignment_name" type="text" className="form-control" value={this_assignment.title} />
                <br />
                <textarea
                    className="form-control">{this_assignment.desc}</textarea>
                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">
                        Points
                    </div>
                    <div className="col-3">
                        <input type="text" className="form-control" value="100" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">
                        Assignment Group
                    </div>
                    <div className="col-3">
                        <select className="form-select">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">
                        Display Grade As
                    </div>
                    <div className="col-3">
                        <select className="form-select">
                            <option>Percentage</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">
                    </div>
                    <div className="col-5">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Do not count this assignment towards the final grade
                            </label>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">Submission Type</div>
                    <div className="col-5">
                        <form className="form-control">
                            <select className="form-select w-50">
                                <option>Online</option>
                            </select>

                            <div className="wd-p-left"><b>Online Entry Options</b></div>
                            <div className="wd-p-left">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="box-check-1" />
                                    <label className="form-check-label" htmlFor="box-check-1">
                                        Text Entry
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="box-check-2" />
                                    <label className="form-check-label" htmlFor="box-check-2">
                                        Website URL
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="box-check-3" />
                                    <label className="form-check-label" htmlFor="box-check-3">
                                        Media Recordings
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="box-check-4" />
                                    <label className="form-check-label" htmlFor="box-check-4">
                                        Student Annotation
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="box-check-5" />
                                    <label className="form-check-label" htmlFor="box-check-5">
                                        File Uploads
                                    </label>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 wd-form-label-align">Assign</div>
                    <div className="col-5">
                        <form className="form-control">
                            <b>Assign To</b>
                            <br />
                            <div className="wd-p-left">
                                <select className="form-select">
                                    <option>Everyone</option>
                                </select>
                            </div>
                            <br />
                            <b>Due</b><br />
                            <input className="form-input" type="date" value="2023-09-18" />
                            <br /><br />

                            <div className="row">
                                <div className="col"><b>Available From</b></div>
                                <div className="col"><b>Until</b></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input className="form-input" type="date" value="2023-09-18" />
                                </div>
                                <div className="col">
                                    <input className="form-input" type="date" value="2023-09-18" />
                                </div>
                            </div>
                        </form>
                        <div>
                            <div className="d-flex justify-content-center">
                                + Add
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="d-flex">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="box-check-5" />
                        <label className="form-check-label" htmlFor="box-check-5">
                            Notify users that this content has changed
                        </label>
                    </div>

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