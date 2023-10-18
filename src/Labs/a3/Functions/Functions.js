import ES5Function from "./ES5Functions";
import ES6Function from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";

function Functions() {
    console.log("Hello World");
    return(
       <div>
          <h1>Functions</h1>
          <ES5Function/>
          <ES6Function/>
          <ImpliedReturn/>
       </div>
    );
 }
 export default Functions;