import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  // renderInput(formProps) {
  //   return (
  //     // OLD WAY <input
  //     //   onChange={formProps.input.onChange}
  //     //   value={formProps.input.value}
  //     // />
  //     //OR renderInput({input})
  //     // <input {input} />
  //     <input {...formProps.input} />

  renderInput({ input, label }) {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter name" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        Stream
      </form>
    );
  }
}
export default reduxForm({ form: "streamCreate" })(StreamCreate);
