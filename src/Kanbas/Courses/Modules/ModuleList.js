import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./ModuleReducer";

function ModuleList() {
    const { courseId } = useParams();
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
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <button className="btn btn-height btn-secondary"
                        onClick={() => dispatch(updateModule(module))}>
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
                            onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>


                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;