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
    getSoftSkills,
    getTechSkills,
    getGroups,
    editEmployee,
    match,
    employee,
    isLoading,
    classes,
    role,
    copyEmployee
  } = props;
  const EditForm = props => {
    return role === "Sale" ? (
      <EditEmployeeForSale {...props} />
    ) : (
      <EditEmployeeForm {...props} />
    );
  };
  let initialValues = {
    technicalSkills: [],
    softSkills: [],
    englishLevel: "",
    group: { name: "" },
    status: "",
    seniorityLevel: ""
  };
  initialValues =
    Object.keys(employee).length === 0
      ? initialValues
      : (initialValues = {
          firstName: employee.firstName,
          lastName: employee.lastName,
          summary: employee.summary,
          email: employee.email,
          education: employee.education,
          englishLevel: employee.englishLevel,
          group: employee.group,
          availabilityDate: employee.availabilityDate,
          status: employee.status,
          technicalSkills: employee.technicalSkills,
          softSkills: employee.softSkills,
          seniorityLevel: employee.seniorityLevel,
          seniority: employee.seniority,
          photoUrl: employee.photoUrl,
          cvUrl: employee.cvUrl
        });
  useEffect(() => {
    getEmployeeDetails(match.params.id);
    getSoftSkills();
    getTechSkills();
    getGroups();
  }, [getEmployeeDetails, match, getSoftSkills, getTechSkills, getGroups]);
  function handlerCopy(values) {
    copyEmployee(values);
  }
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
        render={formProps => (
          <EditForm {...formProps} {...props} handlerCopy={handlerCopy} />
        )}
      />
    </MuiPickersUtilsProvider>
  );
}
export default withStyles(styles)(EditEmployeeComponent);
