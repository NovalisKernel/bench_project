import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ExcelUpload } from "../common/ExcelUpload";
import { Typography, Container } from "@material-ui/core";

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
  }
}));

export default function EditEmployeeForSale(props) {
  const { values, role, employee } = props;
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
                {`Summary: ${values.summary}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Birhday date: ${values.birthday}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Group: ${values.group.name}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                {`Status: ${values.status}`}
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
            {`Education: ${values.education}`}
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            {`English level: ${values.englishLevel}`}
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Technicall skills:
          </Typography>
          {values.skills.map((skill, index) => (
            <Typography key={index} variant="subtitle1" gutterBottom>
              {skill.title}
            </Typography>
          ))}
        </Grid>
        <Grid item>
          <ExcelUpload classes={classes} role={role} employee={employee} />
        </Grid>
      </Grid>
    </Container>
  );
}
