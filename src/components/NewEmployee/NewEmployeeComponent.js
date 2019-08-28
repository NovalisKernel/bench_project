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
  const { role, copy, getSkills } = props;
  const initialValues = copy.isCopy
    ? {
        firstName: "",
        lastName: "",
        summary: copy.employee.summary,
        education: copy.employee.education,
        englishLevel: copy.employee.englishLevel,
        group: copy.employee.group,
        status: copy.employee.status,
        birthday: moment(Date.now()).format(dateFormat),
        availabilityDate: copy.employee.availabilityDate,
        fromNow: copy.employee.fromNow,
        skills: copy.employee.skills,
        file: copy.employee.photoUrl,
        cvUrl: copy.employee.cvUrl
      }
    : {
        firstName: "",
        lastName: "",
        email: "",
        summary: "",
        education: "",
        englishLevel: "",
        group: {
          name: ""
        },
        seniorityLevel: "",
        seniority: "",
        status: "",
        birthday: moment(Date.now()).format(dateFormat),
        availabilityDate: moment(Date.now()).format(dateFormat),
        fromNow: false,
        skills: [
          {
            title: "",
            primary: false
          }
        ],
        softSkills: [
          {
            title: "",
            primary: false
          }
        ],
        file: "",
        cvUrl: ""
      };
  useEffect(() => {
    getSkills();
  }, [getSkills]);
  return role !== "Sale" ? (
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
