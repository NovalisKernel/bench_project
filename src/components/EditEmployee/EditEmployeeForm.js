import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FieldArray, Field } from "formik";
import FormikDatePicker from "../../components/common/DatePicker";
import { Delete, AddCircle } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import AlertDialog from "../common/AlertDialog";
import styles from "./styles";
import EnglishLevels from "../../enums/EnglishLevels";
import Groups from "../../enums/Groups";
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
  const { skills } = values;
  const isError = (index, value) => {
    return (
      Boolean(errors.skills) &&
      Boolean(errors.skills[index]) &&
      Boolean(errors.skills[index][value]) &&
      touched.skills &&
      touched.skills[index] &&
      touched.skills[index][value]
    );
  };
  return (
    <FieldArray
      name="skills"
      render={arrayHelpers => (
        <div className={classes.techSkillsList}>
          {skills.map((skill, index) => (
            <div key={index} className={classes.techSkills}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name={`skills[${index}].title`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={skill.title}
                error={isError(index, "title")}
                helperText={
                  isError(index, "title") ? errors.skills[index].title : null
                }
                label="Tech skill name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Checkbox
                        name={`skills[${index}].primary`}
                        value={`skills[${index}].primary`}
                        checked={skill.primary}
                        onChange={handleChange}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          skills.length !== 1
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

function EditEmployeeForm(props) {
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
    values,
    deleteEmployee,
    match
  } = props;
  console.log("VALUES", values);
  const [open, setOpen] = React.useState(false);
  const openAlert = () => {
    setOpen(true);
  };
  const closeAlert = () => {
    setOpen(false);
  };
  return (
    <Container component="main" className={classes.newEmployee} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit employee
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            name="firstName"
            autoComplete="firstName"
            value={values.firstName}
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
            value={values.lastName}
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
            value={values.summary}
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
            value={values.education}
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
              value={values.englishLevel}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="englishLevel"
                  id="englishLevel"
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
          <FormControl
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel}>Group</InputLabel>
            <Select
              onChange={handleChange}
              value={values.group.name}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="group.name"
                  id="group.name"
                />
              }
            >
              {Groups.map(item => (
                <MenuItem key={item._id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <Field
              component={FormikDatePicker}
              name="birthday"
              value={values.birthday}
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
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                name="onProject"
                value="onProject"
                checked={values.onProject}
                onChange={handleChange}
                color="primary"
              />
            }
            label="On project"
            labelPlacement="start"
          />
          <TechSkillsList {...props} />
          <Button
            className={classes.button}
            onClick={openAlert}
            variant="contained"
            color="primary"
            fullWidth
          >
            Delete
          </Button>
          <AlertDialog
            open={open}
            closeAlert={closeAlert}
            values={values}
            deleteEmployee={deleteEmployee}
            id={match.params.id}
          />
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

export default withStyles(styles)(EditEmployeeForm);
