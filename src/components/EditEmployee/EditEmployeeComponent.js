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
  const { editUser, match, employee, isLoading, classes } = props;
  let initialValues = { techSkills: [], level: "" };
  initialValues =
    Object.keys(employee).length === 0
      ? initialValues
      : (initialValues = {
          firstName: employee.firstName,
          lastName: employee.lastName,
          group: employee.group.name,
          age: employee.birthday,
          level: employee.englishLevel,
          availabilityDate: employee.availabilityDate,
          onProject: employee.onProject,
          fromNow: true,
          techSkills: employee.skills
        });
  useEffect(() => {
    editUser(match.params.id);
  }, [editUser, match]);
  return isLoading ? (
    <div>
      <CircularProgress className={classes.loader} />
    </div>
  ) : (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={EditEmployeeValidationSchema}
        onSubmit={values => console.log(values)}
        render={formProps => <EditEmployeeForm {...formProps} {...props} />}
      />
    </MuiPickersUtilsProvider>
  );
}
export default withStyles(styles)(EditEmployeeComponent);
