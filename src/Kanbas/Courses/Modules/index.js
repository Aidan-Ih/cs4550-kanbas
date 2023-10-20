import "./modules.css"
import modules from "../../Database/modules.json"
import { useParams } from "react-router"
import { FaGripVertical } from "react-icons/fa6"

const Modules = () => {

    const { courseId } = useParams();
    const course_modules = modules[courseId]

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

            {course_modules.map((m, i) => {
                return (
                    <div key={i} className="module-box d-flex flex-row">
                        <FaGripVertical className="grip" />
                        <div className="module-title"><b>{m.name}</b></div>
                        <div className="module-desc">{m.desc}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default Modules;