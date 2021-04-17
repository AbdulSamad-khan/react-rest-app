import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createTodo } from "../../actions";
import TaskForm from "./TaskForm";

class CreateTodo extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <TaskForm onSubmit={this.onSubmit} label="Create your Task" />
      </div>
    );
  }
}

export default connect(null, { createTodo })(CreateTodo);
