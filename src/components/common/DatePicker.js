import React from "react";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";
import dateFormat from "../../helpers/DateFormats";

const FormikDatePicker = ({
    form: { setFieldValue },
    field: { value, name },
    label,
    ...rest
  }) => {
    return (
      <DatePicker
        name={name}
        allowKeyboardControl
        clearable
        autoOk
        label={label}
        inputVariant="outlined"
        format="MM/dd/yyyy"
        placeholder="10/10/2018"
        onChange={value => {
          setFieldValue(name, moment(value).format(dateFormat));
        }}
        value={value}
        animateYearScrolling={false}
      />
    );
  };

  export default FormikDatePicker;