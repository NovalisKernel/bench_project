import React from "react";
import { Formik } from "formik";
import moment from "moment";
import dateFormat from "../../helpers/DateFormats";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import NewEmployeeForm from "./NewEmployeeForm";
import NewEmployeeValidationSchema from "./NewEmployeeValidationSchema";
import { Redirect } from "react-router-dom";

function NewEmployeeComponent(props) {
  const { role } = props;
  return role !== "Sale" ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          summary: "",
          education: "",
          englishLevel: "",
          group: {
            name: ""
          },
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
          file: ""
        }}
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
