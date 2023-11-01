import Add from "./add";
import ClickEvent from "./clickEvent";
import PassingDataOnEvent from "./passdataonevent";
import PassingFunctions from "./passingfunctions";
import EventObject from "./eventobject";
import Counter from "./counter";
import BooleanStateVariables from "./booleanstate";
import StringStateVariables from "./stringstatevariable";
import DateStateVariable from "./datestate";
import ObjectStateVariable from "./objectstate";
import ArrayStateVariable from "./arraystate";
import ParentStateComponent from "./parentstate";
import ReduxExamples from "./Redux";

function Assignment4() {
    return (
        <div className="container">
            <h1>Lab 4</h1>
            <Add a={1} b={2}></Add>
            <ClickEvent></ClickEvent>
            <PassingDataOnEvent />
            <PassingFunctions theFunction={() => alert("passed this function")} />
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ReduxExamples/>
        </div>
    );
}
export default Assignment4;