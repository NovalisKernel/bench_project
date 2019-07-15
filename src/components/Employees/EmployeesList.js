import React from "react";
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "./EmployeeCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import employees from "../../__mock__/Employees";

function EmployeesList(props) {
  const { results } = props;
  return (
    <Container component="main">
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {employees.map(employee => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </Grid>
    </Container>
  );
}

export default EmployeesList;
