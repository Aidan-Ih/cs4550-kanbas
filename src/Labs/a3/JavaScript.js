import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import Functions from "./Functions/Functions";
import WorkingWithArrays from "./Arrays/WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";

function JavaScript() {
    console.log("Hello World");
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <Functions/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
       </div>
    );
 }
 export default JavaScript