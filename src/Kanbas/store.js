import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/ModuleReducer";

const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;