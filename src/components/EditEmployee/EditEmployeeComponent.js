import React, { useEffect } from "react";
import { Formik } from "formik";
import EditEmployeeForm from "./EditEmployeeForm";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import EditEmployeeValidationSchema from "./EditEmployeeValidationSchema";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function EditEmployeeComponent(props) {
  const {
    getEmployeeDetails,
    editEmployee,
    match,
    employee,
    isLoading,
    classes
  } = props;
  let initialValues = { skills: [], englishLevel: "", group: { name: "" } };
  initialValues =
    Object.keys(employee).length === 0
      ? initialValues
      : (initialValues = {
          firstName: employee.firstName,
          lastName: employee.lastName,
          summary: employee.summary,
          education: employee.education,
          englishLevel: employee.englishLevel,
          group: employee.group,
          birthday: employee.birthday,
          availabilityDate: employee.availabilityDate,
          onProject: employee.onProject,
          fromNow: true,
          skills: employee.skills
        });
  useEffect(() => {
    getEmployeeDetails(match.params.id);
  }, [getEmployeeDetails, match]);
  return isLoading ? (
    <div>
      <CircularProgress className={classes.loader} />
    </div>
  ) : (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={EditEmployeeValidationSchema}
        onSubmit={values => {
          editEmployee(match.params.id, values);
        }}
        render={formProps => <EditEmployeeForm {...formProps} {...props} />}
      />
    </MuiPickersUtilsProvider>
  );
}
export default withStyles(styles)(EditEmployeeComponent);
