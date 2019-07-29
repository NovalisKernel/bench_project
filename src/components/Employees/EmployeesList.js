import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "./EmployeeCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import employees from "../../__mock__/Employees";
import styles from "./styles";

function EmployeesList(props) {
  const { classes } = props;
  return (
    <Container component="div" className={classes.employeesList}>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={6}
      >
        {employees.map(employee => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(EmployeesList);
