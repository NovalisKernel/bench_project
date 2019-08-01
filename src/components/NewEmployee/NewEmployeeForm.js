import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormikDatePicker from "../../components/common/DatePicker";
import { FieldArray, Field } from "formik";
import { Delete, AddCircle } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import EnglishLevels from "../../utils/EnglishLevels";
import {
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput
} from "@material-ui/core";

const TechSkillsList = props => {
  const { values, handleBlur, handleChange, touched, errors, classes } = props;
  const { techSkills } = values;
  const isError = (index, value) => {
    return (
      Boolean(errors.techSkills) &&
      Boolean(errors.techSkills[index]) &&
      Boolean(errors.techSkills[index][value]) &&
      touched.techSkills &&
      touched.techSkills[index] &&
      touched.techSkills[index][value]
    );
  };
  return (
    <FieldArray
      name="techSkills"
      render={arrayHelpers => (
        <div className={classes.techSkillsList}>
          {techSkills.map((skill, index) => (
            <div key={index} className={classes.techSkills}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name={`techSkills[${index}].name`}
                onChange={handleChange}
                onBlur={handleBlur}
                error={isError(index, "name")}
                helperText={
                  isError(index, "name") ? errors.techSkills[index].name : null
                }
                label="Tech skill name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Checkbox
                        name={`techSkills[${index}].isPrimary`}
                        value={`techSkills[${index}].isPrimary`}
                        onChange={handleChange}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          techSkills.length !== 1
                            ? arrayHelpers.remove(index)
                            : null
                        }
                      >
                        <Delete />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => arrayHelpers.push({ name: "", isPrimary: false })}
          >
            <AddCircle />
          </Button>
        </div>
      )}
    />
  );
};

function NewEmployeeForm(props) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const {
    classes,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    values
  } = props;
  return (
    <Container component="main" className={classes.newEmployee} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          New employee
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            name="firstName"
            autoComplete="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName ? errors.firstName : ""}
            label="First name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastName"
            name="lastName"
            autoComplete="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName ? errors.lastName : ""}
            label="Last name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            id="summary"
            name="summary"
            autoComplete="summary"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.summary && Boolean(errors.summary)}
            helperText={touched.summary ? errors.summary : ""}
            label="Summary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="education"
            name="education"
            autoComplete="education"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.education && Boolean(errors.education)}
            helperText={touched.education ? errors.education : ""}
            label="Education"
          />
          <FormControl
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel}>English level</InputLabel>
            <Select
              onChange={handleChange}
              value={values.level}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="level"
                  id="level"
                />
              }
            >
              {EnglishLevels.map(item => (
                <MenuItem key={item._id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="group"
            name="group"
            autoComplete="group"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.group && Boolean(errors.group)}
            helperText={touched.group ? errors.group : ""}
            label="Group"
          />
          <FormControl className={classes.formControl} fullWidth>
            <Field
              component={FormikDatePicker}
              name="age"
              value={values.age}
              label="Birthday date"
            />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <Field
              component={FormikDatePicker}
              name="availabilityDate"
              value={values.availabilityDate}
              label="Availability date"
            />
          </FormControl>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
          </label>
          <TechSkillsList {...props} />
          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(NewEmployeeForm);
