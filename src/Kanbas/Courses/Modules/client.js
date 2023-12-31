import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-oehk.onrender.com/api/courses";
const MODULES_URL = "https://kanbas-node-server-app-oehk.onrender.com/api/modules";
export const updateModuleReq = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};

export const deleteModuleReq = async (moduleId) => {
    console.log(moduleId)
    const response = await axios
        .delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId) => {
    console.log("hi")
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};
