import { combineReducers } from "redux";
import { reducer } from "redux-form";
import _ from "lodash";
const tasks = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, action.payload];
    case "FETCH_TODOS":
      return action.payload;
    case "FETCH_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    default:
      return state;
  }
};

export default combineReducers({
  form: reducer,
  tasks: tasks,
});
