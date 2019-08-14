import React, { useEffect } from "react";
import { Formik } from "formik";
import EditEmployeeForm from "./EditEmployeeForm";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import EditEmployeeValidationSchema from "./EditEmployeeValidationSchema";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import EditEmployeeForSale from "./EditEmployeeForSale";
import styles from "./styles";

function EditEmployeeComponent(props) {
  const {
    getEmployeeDetails,
    editEmployee,
    match,
    employee,
    isLoading,
    classes,
    role
  } = props;
  const EditForm = props => {
    return role === "Sale" ? (
      <EditEmployeeForSale {...props} />
    ) : (
      <EditEmployeeForm {...props} />
    );
  };
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
          status: employee.status,
          fromNow: true,
          skills: employee.skills,
          photoUrl: employee.photoUrl,
          cvUrl: employee.cvUrl
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
        render={formProps => <EditForm {...formProps} {...props} />}
      />
    </MuiPickersUtilsProvider>
  );
}
export default withStyles(styles)(EditEmployeeComponent);
