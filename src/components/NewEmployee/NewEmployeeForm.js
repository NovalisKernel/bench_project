import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import { FieldArray } from "formik";
import { Delete, AddCircle } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import { IconButton, InputAdornment } from "@material-ui/core";

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
                      <Checkbox name={`techSkills[${index}].isPrimary`} value={`techSkills[${index}].isPrimary`} onChange={handleChange}/>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => arrayHelpers.remove(index)}>
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
  const {
    classes,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <Container component="main"className={classes.newEmployee} maxWidth="xs">
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
            label="Firstname"
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
            label="Lastname"
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
          <TechSkillsList {...props} />
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(NewEmployeeForm);
