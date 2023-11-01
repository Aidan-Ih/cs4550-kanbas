import "./modules.css"
import { useParams } from "react-router"
import { FaGripVertical } from "react-icons/fa6"
import { useSelector } from "react-redux";

const Modules = ({ showEdit }) => {

    const { courseId } = useParams();

    const modules = useSelector((state) => state.modulesReducer.modules);

    return (
        <div class="d-flex flex-row">
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

                {modules
                    .filter((module) => module.course === courseId)
                    .map((m, i) => {
                        return (
                            <div key={i} className="module-box d-flex flex-row">
                                <FaGripVertical className="grip" />
                                <div className="module-title"><b>{m.name}</b></div>
                                <div className="module-desc">{m.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Modules;