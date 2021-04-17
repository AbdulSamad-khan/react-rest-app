import React from "react";
import { Field, reduxForm } from "redux-form";

class CreateTodo extends React.Component {
  renderInput({ input, label, meta }) {
    const result = meta.touched && meta.error ? "ui red message" : "";
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div className={`${result}`}>{meta.touched ? meta.error : ""}</div>
      </div>
    );
  }
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <div className="ui container">
        <h4 className="ui dividing header">{this.props.label}</h4>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="task" component={this.renderInput} label="Enter Task" />
          <Field
            name="desciption"
            component={this.renderInput}
            label="Enter desciption"
          />
          <button className="ui inverted primary button">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const error = {};
  if (!formValues.task) {
    error.task = "task is required here!";
  }
  if (!formValues.desciption) {
    error.desciption = "desciption is required here!";
  }
  return error;
};
export default reduxForm({
  form: "createTodo",
  validate,
})(CreateTodo);
