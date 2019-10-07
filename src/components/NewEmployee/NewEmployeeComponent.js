import React, { useEffect } from "react";
import { Formik } from "formik";
import moment from "moment";
import dateFormat from "../../helpers/DateFormats";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import NewEmployeeForm from "./NewEmployeeForm";
import NewEmployeeValidationSchema from "./NewEmployeeValidationSchema";
import { Redirect } from "react-router-dom";

function NewEmployeeComponent(props) {
  const { role, copy, getTechSkills, getSoftSkills } = props;
  const initialValues = copy.isCopy
    ? {
        firstName: "",
        lastName: "",
        email: "",
        education: copy.employee.education,
        summary: copy.employee.summary,
        status: copy.employee.status,
        availabilityDate: copy.employee.availabilityDate,
        englishLevel: copy.employee.englishLevel,
        group: copy.employee.group,
        seniorityLevel: copy.employee.seniorityLevel,
        seniority: copy.employee.seniority,
        technicalSkills: copy.employee.technicalSkills,
        softSkills: copy.employee.softSkills,
        file: "",
        cvUrl: copy.employee.cvUrl
      }
    : {
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        summary: "",
        status: "",
        availabilityDate: moment(Date.now()).format(dateFormat),
        englishLevel: "",
        group: {
          name: ""
        },
        seniorityLevel: "",
        seniority: "",
        technicalSkills: [],
        softSkills: [],
        file: "",
        cvUrl: ""
      };
  useEffect(() => {
    getTechSkills();
    getSoftSkills();
  }, [getTechSkills, getSoftSkills]);
  return role.trim() !== "Sale" ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        validationSchema={NewEmployeeValidationSchema}
        onSubmit={values => {
          props.addEmployee(values);
        }}
        render={formProps => <NewEmployeeForm {...formProps} {...props} />}
      />
    </MuiPickersUtilsProvider>
  ) : (
    <Redirect to="/" />
  );
}

export default NewEmployeeComponent;
