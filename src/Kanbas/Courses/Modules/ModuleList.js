import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "./ModuleReducer";
import { findModulesForCourse, createModule, deleteModuleReq, updateModuleReq } from "./client";
import { useEffect } from "react";


function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        deleteModuleReq(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        await updateModuleReq(module);
        dispatch(updateModule(module));
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className="d-flex flex-row">
                    <div>
                        <div>
                            <input className="form-control"
                                value={module.name}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, name: e.target.value }))
                                } />
                        </div>
                        <div>
                            <textarea className="form-control"
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, description: e.target.value }))
                                } />
                        </div>
                    </div>

                    <button className="btn btn-height btn-danger ms-auto"
                        onClick={handleAddModule}>
                        Add
                    </button>
                    <button className="btn btn-height btn-secondary"
                        onClick={() => handleUpdateModule()}>
                        Update
                    </button>
                </div>

            </li>
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item d-flex">
                        <div>
                            <h3>{module.name}</h3>
                            {module.description}
                        </div>
                        <div className="ms-auto">
                            <button type="button" className="btn btn-secondary btn-height"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                        </div>

                        <button type="button" className="btn btn-danger btn-height"
                            onClick={() => handleDeleteModule(module._id)}>

                            Delete
                        </button>


                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;