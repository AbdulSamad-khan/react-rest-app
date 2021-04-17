import taskClient from "../api/taskClient";
import history from "../History";
// action creators

// create Task
export const createTodo = (formValues) => {
  return async (dispatch) => {
    const response = await taskClient.post("/task", formValues);
    dispatch({ type: "CREATE_TODO", payload: response.data });
    history.push("/");
  };
};

// fetch Tasks

export const fetchTasks = () => {
  return async (dispatch) => {
    const response = await taskClient.get("/task");
    dispatch({ type: "FETCH_TODOS", payload: response.data });
  };
};

// fetch Task

export const fetchTask = (id) => {
  return async (dispatch) => {
    const response = await taskClient.get(`/task/${id}`);
    dispatch({ type: "FETCH_TASK", payload: response.data });
  };
};

// delete Tasks

export const deleteTask = (id) => {
  return async (dispatch) => {
    const response = await taskClient.delete(`/task/${id}`);
    history.push("/");
  };
};

// updating tasks

export const updateTask = (id, formValues) => {
  return async (dispatch) => {
    const response = await taskClient.put(`/task/${id}`, formValues);
    // console.log(response.data);
    dispatch({ type: "UPDATE_TASK", payload: response.data });
    history.push("/");
  };
};
