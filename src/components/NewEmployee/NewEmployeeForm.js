import React from "react";
import { Field } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import {
  EnglishLevels,
  Groups,
  EmployeeStatuses,
  SeniorityLevels
} from "../../enums";
import {
  FormikDatePicker,
  ExcelUpload,
  ImageUpload,
  MultiplyWithCreatableInput
} from "../common";
import {
  Container,
  Typography,
  TextField,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Grid,
  AppBar,
  Toolbar,
  FormHelperText,
  Divider
} from "@material-ui/core";

function NewEmployeeForm(props) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const isGroupError = () => {
    return (
      Boolean(errors.group) &&
      Boolean(errors.group.name) &&
      Boolean(touched.group)
    );
  };
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
    setFieldValue,
    technicalSkills,
    softSkills
  } = props;
  return (
    <Container component="div" className={classes.newEmployee} maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          New employee
        </Typography>
        <Grid
          container
          component="form"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} sm={2}>
            <FormControl className={classes.imageFormControl} fullWidth>
              <ImageUpload
                onChange={(id, data) => setFieldValue(id, data)}
                classes={classes}
                id="file"
                name="file"
                value={values.file}
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
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  name="lastName"
                  autoComplete="lastName"
                  value={values.lastName}
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
            <Grid container direction="column" justify="center">
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
              <Grid item xs={12} sm={6} className={classes.gridContainer}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  className={classes.formControl}
                  error={isGroupError()}
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
                      <MenuItem key={item._id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {isGroupError() ? (
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
                >
                  <InputLabel ref={inputLabel}>Seniority level</InputLabel>
                  <Select
                    onChange={handleChange}
                    value={values.seniorityLevel}
                    input={
                      <OutlinedInput
                        labelWidth={90}
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
            {/* <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl} fullWidth>
                  <Field
                    component={FormikDatePicker}
                    name="birthday"
                    value={values.birthday}
                    label="Birthday date"
                  />
                </FormControl>
              </Grid>
            </Grid> */}
            <Grid container direction="column" justify="center">
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Typography component="span" variant="h5">
                  Skills
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={12} className={classes.gridContainer}>
                <Field
                  id="techSkills"
                  name="skills"
                  label="Technical skills"
                  component={MultiplyWithCreatableInput}
                  skills={technicalSkills}
                  values={values.technicalSkills}
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.gridContainer} />
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
              <Button
                className={classes.fabButtonAdd}
                variant="contained"
                color="secondary"
                type="submit"
              >
                Submit
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    </Container>
  );
}

export default withStyles(styles)(NewEmployeeForm);
