import ModuleList from "./ModuleList";
import Modules from ".";

const ModulesWithList = () => {
    return (
        <div className="d-flex flex-row">
            <Modules/>
            <ModuleList/>
        </div>
    )
}

export default ModulesWithList;