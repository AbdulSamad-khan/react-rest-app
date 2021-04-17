import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../../actions";
import { Link } from "react-router-dom";

const ListTodo = (props) => {
  useEffect(() => {
    props.fetchTasks();
  }, []);

  const renderTasks = props.tasks.map((task, index) => {
    return (
      <div key={index}>
        <h3>Task: {task.task}</h3>
        <p> Description: {task.desciption}</p>
        <Link to={`/task/delete/${task.id}`} className="ui inverted red button">
          Delete
        </Link>
        <Link to={`/task/edit/${task.id}`} className="ui inverted green button">
          Update
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h1> TodoList</h1>
      <p style={{ color: "red" }}>
        {props.tasks.length ? "" : "Create Todo below"}
      </p>
      {renderTasks}

      <h1> Create Todo </h1>
      <hr />
      <Link className="ui inverted primary button" to={`/task/new`}>
        Create task
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { fetchTasks })(ListTodo);
