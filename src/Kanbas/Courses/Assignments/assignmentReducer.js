import { createSlice } from "@reduxjs/toolkit";
import dbAssignments from "../../Database/assignments.json"

const initialState = {
    assignments: dbAssignments,
    assignment: {
        title: "New Assignment",
        desc: "New Description",
    },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            console.log(action.payload)
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment.id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment.id === action.payload.id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const { setAssignment, addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;


export default assignmentsSlice.reducer;