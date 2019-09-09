import React from "react";
import { Field } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  AlertDialog,
  FormikDatePicker,
  ExcelUpload,
  ImageUpload,
  MultiplyWithCreatableInput
} from "../common";
import styles from "./styles";
import {
  EnglishLevels,
  Groups,
  EmployeeStatuses,
  SeniorityLevels
} from "../../enums";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Grid,
  AppBar,
  FormHelperText,
  Toolbar,
  Divider
} from "@material-ui/core";

function EditEmployeeForm(props) {
  const inputLabel = React.useRef(null);
  const isGroupError = selectItem => {
    return (
      Boolean(errors[selectItem]) &&
      Boolean(errors[selectItem].name) &&
      Boolean(touched[selectItem])
    );
  };
  const isSelectError = selectItem => {
    return Boolean(touched[selectItem]) && Boolean(errors[selectItem]);
  };

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
    handlerCopy,
    technicalSkills,
    softSkills
  } = props;
  const disabled = role === "Sale Manager " ? true : false;
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
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Typography component="span" variant="h5">
                  Personal info
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
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
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
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
            <Grid container>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email ? errors.email : ""}
                  label="Email"
                />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
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
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
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
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Typography component="span" variant="h5">
                  Availability
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  error={isSelectError("status")}
                >
                  <InputLabel ref={inputLabel}>Employee status</InputLabel>
                  <Select
                    onChange={handleChange}
                    value={values.status}
                    onBlur={handleBlur}
                    input={
                      <OutlinedInput
                        labelWidth={120}
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
                  {isSelectError("status") ? (
                    <FormHelperText id="group-helper" error variant="filled">
                      {errors.status}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <FormControl className={classes.formControl} fullWidth>
                  <Field
                    component={FormikDatePicker}
                    name="availabilityDate"
                    value={values.availabilityDate}
                    label="Availability date"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Typography component="span" variant="h5">
                  Other information
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  error={isSelectError("englishLevel")}
                >
                  <InputLabel ref={inputLabel}>English level</InputLabel>
                  <Select
                    onChange={handleChange}
                    value={values.englishLevel}
                    onBlur={handleBlur}
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
                  {isSelectError("englishLevel") ? (
                    <FormHelperText id="group-helper" error variant="filled">
                      {errors.englishLevel}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  error={isGroupError("group")}
                >
                  <InputLabel ref={inputLabel}>Group</InputLabel>
                  <Select
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                      <MenuItem key={item._id} value={item.value}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {isGroupError("group") ? (
                    <FormHelperText id="group-helper" error variant="filled">
                      {errors.group.name}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  error={isSelectError("seniorityLevel")}
                >
                  <InputLabel ref={inputLabel}>Seniority level</InputLabel>
                  <Select
                    onChange={handleChange}
                    value={values.seniorityLevel}
                    onBlur={handleBlur}
                    input={
                      <OutlinedInput
                        labelWidth={100}
                        name="seniorityLevel"
                        id="seniorityLevel"
                      />
                    }
                  >
                    {SeniorityLevels.map(item => (
                      <MenuItem key={item._id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {isSelectError("seniorityLevel") ? (
                    <FormHelperText id="group-helper" error variant="filled">
                      {errors.seniorityLevel}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="seniority"
                  name="seniority"
                  autoComplete="seniority"
                  value={values.seniority}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.seniority && Boolean(errors.seniority)}
                  helperText={touched.seniority ? errors.seniority : ""}
                  label="Seniority"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Typography component="span" variant="h5">
                  Skills
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Field
                  id="technicalSkills"
                  name="technicalSkills"
                  label="Technical skills"
                  component={MultiplyWithCreatableInput}
                  skills={technicalSkills}
                  values={values.technicalSkills}
                  error={
                    touched.technicalSkills && Boolean(errors.technicalSkills)
                  }
                  helperText={
                    touched.technicalSkills ? errors.technicalSkills : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Field
                  id="softSkills"
                  name="softSkills"
                  label="Soft skills"
                  component={MultiplyWithCreatableInput}
                  skills={softSkills}
                  values={values.softSkills}
                  error={touched.softSkills && Boolean(errors.softSkills)}
                  helperText={touched.softSkills ? errors.softSkills : ""}
                />
              </Grid>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.gridContainer} />
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
              <Grid container justify="center" spacing={3}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    aria-label="add"
                    className={classes.fabButtonAdd}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    aria-label="delete"
                    onClick={openAlert}
                    className={classes.fabButtonDelete}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item>
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
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    </Container>
  );
}

export default withStyles(styles)(EditEmployeeForm);
