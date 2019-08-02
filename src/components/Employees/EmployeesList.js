import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "./EmployeeCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { stringify, parse } from "query-string";
import Filters from "./Filters";
import styles from "./styles";

function EmployeesList(props) {
  const { getEmployees, employees, isLoading, location, history } = props;
  const parsed = parse(location.search);
  const [values, setValues] = React.useState({
    age: parsed.age || "",
    group: parsed.group || "",
    sort: parsed.sort || "",
    available: parsed.available || ""
  });
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  function queryCreator(filters) {
    for (let key in filters) {
      if (filters[key] === "" || filters[key] === null) {
        delete filters[key];
      }
    }
    return stringify(filters);
  }
  function handleFilter() {
    const path = location.pathname;
    const query = { ...values };
    const queryStringified = queryCreator(query);
    history.push(`${path}?${queryStringified}`);
  }
  useEffect(() => {
    getEmployees(location.search);
  }, [getEmployees, location]);
  const { classes } = props;
  return (
    <Container component="div" className={classes.employeesList}>
      <CssBaseline />
      <Filters
        values={values}
        handleChange={handleChange}
        handleFilter={handleFilter}
      />
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
