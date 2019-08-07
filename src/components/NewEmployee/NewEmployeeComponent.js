import React from "react";
import { Formik } from "formik";
import moment from "moment";
import dateFormat from "../../helpers/DateFormats";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import NewEmployeeForm from "./NewEmployeeForm";
import NewEmployeeValidationSchema from "./NewEmployeeValidationSchema";

function NewEmployeeComponent(props) {
  return (
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
  );
}

export default NewEmployeeComponent;
