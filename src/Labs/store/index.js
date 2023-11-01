import { configureStore } from "@reduxjs/toolkit";
import helloreducer from "../a4/Redux/HelloRedux/helloreducer";
import counterReducer from "../a4/Redux/CounterRedux/counterReducer";
import addReducer from "../a4/Redux/AddRedux/addReducer";
import todosReducer from "../a4/Redux/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloreducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;