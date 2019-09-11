import React from "react";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";
import dateFormat from "../../helpers/DateFormats";

const FormikDatePicker = ({
  form: { setFieldValue },
  field: { value, name },
  label,
  disabled,
  ...rest
}) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return (
    <DatePicker
      name={name}
      allowKeyboardControl
      clearable
      autoOk
      disablePast
      maxDate={moment(now).add(5, "years").toDate()}
      label={label}
      disabled={disabled}
      inputVariant="outlined"
      format="MM/dd/yyyy"
      placeholder="10/10/2018"
      onChange={value => {
        value
          ? setFieldValue(name, moment(value).format(dateFormat))
          : setFieldValue(name, moment(now).format(dateFormat));
      }}
      value={value}
      animateYearScrolling={false}
    />
  );
};

export default FormikDatePicker;
