import React from "react";
import { Formik } from "formik";
import NewEmployeeForm from "./NewEmployeeForm";
import NewEmployeeValidationSchema from "./NewEmployeeValidationSchema";

function NewEmployeeComponent(props) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        techSkills: [
          {
            name: "",
            description: ""
          }
        ]
      }}
      validationSchema={NewEmployeeValidationSchema}
      onSubmit={values => {
        console.log(values);
      }}
      render={formProps => <NewEmployeeForm {...formProps} {...props} />}
    />
  );
}

export default NewEmployeeComponent;
