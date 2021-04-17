import React from "react";
import { connect } from "react-redux";
import { fetchTask, updateTask } from "../../actions";
import TaskForm from "./TaskForm";
import _ from "lodash";

class UpdateTask extends React.Component {
  onSubmit = (formValues) => {
    this.props.updateTask(this.props.match.params.id, formValues);
  };

  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <TaskForm
          onSubmit={this.onSubmit}
          label="update your task"
          initialValues={this.props.task}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const todo_task = _.mapKeys(state.tasks, "id");
  return { task: todo_task[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchTask, updateTask })(UpdateTask);
