import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          (<div className="header">{error}</div>
        </div>
      );
    }
  }
  // renderInput(formProps) {
  //   return (
  //     // OLD WAY <input
  //     //   onChange={formProps.input.onChange}
  //     //   value={formProps.input.value}
  //     // />
  //     //OR renderInput({input})
  //     // <input {input} />
  //     <input {...formProps.input} />

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{meta.error}</div>
      </div>
    );
  };
  // for react state onSubmit(event){
  //   event.preventDefault();
  // }
  onSubmit(formValues) {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must ented description";
  }
  return errors;
};
const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);
export default connect(
  null,
  { createStream }
)(formWrapped);
