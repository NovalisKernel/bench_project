import React from "react";
import { Formik } from "formik";
import moment from "moment";
import dateFormat from "../../helpers/DateFormats";
import NewEmployeeForm from "./NewEmployeeForm";
import NewEmployeeValidationSchema from "./NewEmployeeValidationSchema";

function NewEmployeeComponent(props) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        group: "",
        age: null,
        availabilityDate: moment(Date.now()).format(dateFormat),
        fromNow: false,
        techSkills: [
          {
            name: "",
            isPrimary: false
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
