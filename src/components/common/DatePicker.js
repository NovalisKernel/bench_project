import React from "react";
import { DatePicker } from "@material-ui/pickers";

const FormikDatePicker = ({
    name,
    form: { setFieldValue },
    field: { value },
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
          setFieldValue("name", value);
        }}
        value={value}
        animateYearScrolling={false}
      />
    );
  };

  export default FormikDatePicker;