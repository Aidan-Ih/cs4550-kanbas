
import NavBar from "./Navbar";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./Kanbas.css"
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

import courses from "./Database/courses.json"

function Kanbas() {

   const [coursesState, setCourses] = useState(courses);
   const [newCourse, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = () => {
      setCourses([...coursesState, { ...newCourse, _id: new Date().getTime().toString() }]);
   };
   const deleteCourse = (courseId) => {
      setCourses(coursesState.filter((course) => course._id !== courseId));
   };
   const updateCourse = () => {
      setCourses(
         courses.map((c) => {
            if (c._id === newCourse._id) {
               return newCourse;
            } else {
               return c;
            }
         })
      );
   };


   return (
      <Provider store={store}>
         <div className="d-flex">
            <NavBar />
            <div className="wd-content">
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={<Dashboard
                     coursesState={coursesState}
                     newCourse={newCourse}
                     setNewCourse={setCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />
                  } />
                  <Route path="Courses/:courseId/*" element={<Courses courses={coursesState} />} />
               </Routes>
            </div>
         </div>
      </Provider>

   );
}
export default Kanbas