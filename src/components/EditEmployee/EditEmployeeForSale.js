import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ExcelUpload } from "../common/ExcelUpload";
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Divider,
  Grid,
  Avatar
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  employeeInfo: {
    marginTop: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    width: 200
  },
  appBar: {
    top: "auto",
    bottom: 0
  }
}));

export default function EditEmployeeForSale(props) {
  const { values, role, employee } = props;
  // console.log("VALUES ", values)
  const classes = useStyles();
  return (
    <Container component="div" maxWidth="md">
      <Grid className={classes.employeeInfo} container spacing={3}>
        <Grid item>
          <Avatar
            alt={values.firstName}
            src={values.photoUrl}
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="h5" gutterBottom>
                {`Staff Member: ${values.firstName} ${values.lastName}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Summary: ${values.summary !== undefined ? values.summary : " — " }`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Birhday date: ${values.birthday !== undefined ? values.birthday : " — " }`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Group: ${values.group.name !== undefined ? values.group.name : " — " }`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Status: ${values.status !== undefined ? values.status : " — " }`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Availability date: ${
                  values.availabilityDate ? values.availabilityDate : "Date"
                }`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={3}>
        <Divider />
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            {`Education: ${values.education !== undefined ? values.education : " — " }`}
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            {`English level: ${values.englishLevel !== undefined ? values.englishLevel : " — " }`}
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Technicall skills:
          </Typography>
          {values.technicalSkills.map((skill, index) => (
            <Typography key={index} variant="subtitle1" gutterBottom>
              {skill.title}
            </Typography>
          ))}
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Soft skills:
          </Typography>
          {values.softSkills.map((skill, index) => (
            <Typography key={index} variant="subtitle1" gutterBottom>
              {skill.title}
            </Typography>
          ))}
        </Grid>
        <Grid item>
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
              <ExcelUpload classes={classes} role={role} employee={employee} />
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Container>
  );
}
