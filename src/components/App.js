import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import CreateTodo from "./tasks/CreateTodo";
import ListTodo from "./tasks/ListTodo";
import UpdateTask from "./tasks/UpdateTask";
import DeleteTodo from "./tasks/DeleteTodo";
import history from "../History";
const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={ListTodo} />
      <Route path="/task/new" exact component={CreateTodo} />
      <Route path="/task/edit/:id" exact component={UpdateTask} />
      <Route path="/task/delete/:id" exact component={DeleteTodo} />
    </Router>
  );
};
export default App;
