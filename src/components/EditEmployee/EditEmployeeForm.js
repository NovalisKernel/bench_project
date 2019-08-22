import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import { FieldArray, Field } from "formik";
import FormikDatePicker from "../../components/common/DatePicker";
import {
  Delete,
  AddCircle,
  DeleteForever,
  CheckCircle,
  FileCopy
} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import AlertDialog from "../common/AlertDialog";
import { ExcelUpload } from "../common/ExcelUpload";
import { ImageUpload } from "../common/FileUpload";
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
  OutlinedInput,
  Grid,
  AppBar,
  Fab,
  Toolbar
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
    role,
    setFieldValue,
    handlerCopy
  } = props;
  const disabled = role === "Sale" ? true : false;
  const [open, setOpen] = React.useState(false);
  const openAlert = () => {
    setOpen(true);
  };
  const closeAlert = () => {
    setOpen(false);
  };
  return (
    <Container component="main" className={classes.newEmployee} maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit employee
        </Typography>
        <Grid
          container
          component="form"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} sm={2}>
            <FormControl className={classes.formControl} fullWidth>
              <ImageUpload
                onChange={(id, data) => setFieldValue(id, data)}
                classes={classes}
                id="photoUrl"
                name="photoUrl"
                value={values.photoUrl}
              />
            </FormControl>
          </Grid>
          <Grid container item direction="column" xs={12} sm={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
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
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl} fullWidth>
                  <Field
                    disabled={disabled}
                    component={FormikDatePicker}
                    name="birthday"
                    value={values.birthday}
                    label="Birthday date"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container direction="column" justify="center">
              <Grid item>
                <FormControl className={classes.formControl} fullWidth>
                  <Field
                    disabled={disabled}
                    component={FormikDatePicker}
                    name="availabilityDate"
                    value={values.availabilityDate}
                    label="Availability date"
                  />
                </FormControl>
                <Grid item>
                  <TechSkillsList {...props} disabled={disabled} />
                </Grid>
              </Grid>
              {!disabled ? (
                <React.Fragment>
                  <ExcelUpload
                    onChange={(id, data) => setFieldValue(id, data)}
                    classes={classes}
                    id="cvUrl"
                    name="cvUrl"
                    value={values.cvUrl}
                  />
                  <AlertDialog
                    open={open}
                    closeAlert={closeAlert}
                    values={values}
                    deleteEmployee={deleteEmployee}
                    id={match.params.id}
                  />
                </React.Fragment>
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} />
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
              <div className={classes.containerButton}>
                <Button
                  variant="contained"
                  color="secondary"
                  aria-label="add"
                  className={classes.fabButtonAdd}
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  aria-label="delete"
                  onClick={openAlert}
                  className={classes.fabButtonDelete}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  aria-label="copy"
                  onClick={() => {
                    handlerCopy(values);
                  }}
                  className={classes.fabButtonCopy}
                >
                  Copy
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    </Container>
  );
}

export default withStyles(styles)(EditEmployeeForm);
