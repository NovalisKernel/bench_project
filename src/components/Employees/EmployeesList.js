import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "./EmployeeCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles";

function EmployeesList(props) {
  const { getEmployees, employees, isLoading } = props;
  useEffect(() => {
    getEmployees();
  }, [getEmployees]);
  const { classes } = props;
  return (
    <Container component="div" className={classes.employeesList}>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        spacing={6}
      >
        {isLoading ? (
          <CircularProgress className={classes.loader} />
        ) : (
          employees.map(employee => (
            <EmployeeCard key={employee.employerId} {...employee} />
          ))
        )}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(EmployeesList);
