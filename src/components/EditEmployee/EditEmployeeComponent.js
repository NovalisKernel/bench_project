import React from "react";
import { Formik } from "formik";
import EditEmployeeForm from "./EditEmployeeForm";
import EditEmployeeValidationSchema from "./EditEmployeeValidationSchema";

function EditEmployeeComponent(props) {
  const { employee } = props;
  return (
    <Formik
      initialValues={{
        firstName: employee.firstName,
        lastName: employee.lastName,
        group: employee.group,
        availabilityDate: employee.availabilityDate,
        fromNow: employee.fromNow,
        techSkills: employee.techSkills
      }}
      validationSchema={EditEmployeeValidationSchema}
      onSubmit={values => console.log(values)}
      render={formProps => <EditEmployeeForm {...formProps} {...props} />}
    />
  );
}
export default EditEmployeeComponent;
