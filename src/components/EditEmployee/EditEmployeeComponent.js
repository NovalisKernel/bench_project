import React from "react";
import { Formik } from "formik";
import EditEmployeeForm from "./EditEmployeeForm";
import EditEmployeeValidationSchema from "./EditEmployeeValidationSchema";
import Employess from "../../__mock__/Employees";

function EditEmployeeComponent(props) {
  const userId = props.match.params.id;
  const employee = Employess.filter(emp => (emp.id === userId))[0];
  return (
    <Formik
      initialValues={{
        firstName: employee.firstname,
        lastName: employee.lastname,
        group: employee.group,
        availabilityDate: employee.availabilitydate,
        fromNow: employee.fromnow,
        techSkills: employee.skills
      }}
      validationSchema={EditEmployeeValidationSchema}
      onSubmit={values => console.log(values)}
      render={formProps => <EditEmployeeForm {...formProps} {...props} />}
    />
  );
}
export default EditEmployeeComponent;
