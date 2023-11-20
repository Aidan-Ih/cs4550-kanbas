
import NavBar from "./Navbar";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./Kanbas.css"
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function Kanbas() {
   const URL = "https://kanbas-node-server-app-oehk.onrender.com/api/courses"

   const [courses, setCourses] = useState([]);
   const [newCourse, setCourse] = useState({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = async () => {
      const response = await axios.post(URL, newCourse);
      setCourses([
         response.data,
         ...courses,
      ]);
      setCourse({ name: "" });
   };
   const deleteCourse = async (courseId) => {
      await axios.delete(
         `${URL}/${courseId}`
      );

      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = async () => {
      await axios.put(
         `${URL}/${newCourse._id}`,
         newCourse
      );

      setCourses(
         courses.map((c) => {
            if (c._id === newCourse._id) {
               return newCourse;
            } else {
               return c;
            }
         })
      );
   };;
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);

   return (
      <Provider store={store}>
         <div className="d-flex">
            <NavBar />
            <div className="wd-content">
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={<Dashboard
                     courses={courses}
                     newCourse={newCourse}
                     setNewCourse={setCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />
                  } />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
               </Routes>
            </div>
         </div>
      </Provider>

   );
}
export default Kanbas