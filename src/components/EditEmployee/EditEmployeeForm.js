import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import { FieldArray, Field } from "formik";
import FormikDatePicker from "../../components/common/DatePicker";
import { Delete, AddCircle } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import AlertDialog from "../common/AlertDialog";
import generateXlsx from "../../helpers/ExcelGeneretor";
import styles from "./styles";
import EnglishLevels from "../../enums/EnglishLevels";
import Groups from "../../enums/Groups";
import EmployeeStatuses from "../../enums/EmployeeStatuses";
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
  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    classes,
    disabled
  } = props;
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
                disabled={disabled}
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
                        disabled={disabled}
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
                        disabled={disabled}
                      >
                        <Delete />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>
          ))}
          {!disabled ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => arrayHelpers.push({ name: "", isPrimary: false })}
            >
              <AddCircle />
            </Button>
          ) : null}
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
    match,
    role
  } = props;
  const disabled = role === "Sale" ? true : false;
  const [open, setOpen] = React.useState(false);
  const openAlert = () => {
    setOpen(true);
  };
  const closeAlert = () => {
    setOpen(false);
  };
  const handleExcel = e => {
    generateXlsx(values);
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
                  labelWidth={90}
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
            disabled={disabled}
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
                  labelWidth={46}
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
          <FormControl
            disabled={disabled}
            variant="outlined"
            fullWidth
            className={classes.formControl}
          >
            <InputLabel ref={inputLabel}>Employee status</InputLabel>
            <Select
              onChange={handleChange}
              value={values.status}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="status"
                  id="status"
                />
              }
            >
              {EmployeeStatuses.map(item => (
                <MenuItem key={item._id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <Field
              disabled={disabled}
              component={FormikDatePicker}
              name="birthday"
              value={values.birthday}
              label="Birthday date"
            />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth>
            <Field
              disabled={disabled}
              component={FormikDatePicker}
              name="availabilityDate"
              value={values.availabilityDate}
              label="Availability date"
            />
          </FormControl>
          <TechSkillsList {...props} disabled={disabled} />
          {!disabled ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : null}
          <Button
            className={classes.button}
            onClick={handleExcel}
            variant="contained"
            color="primary"
            fullWidth
          >
            Excel
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(EditEmployeeForm);
