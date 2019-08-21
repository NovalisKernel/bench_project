import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EmployeeCard from "./EmployeeCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { stringify, parse } from "query-string";
import { ArrowUpward } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import ScrollToTop from "react-scroll-up";
import clsx from "clsx";
import HeaderWithToolbar from "../common/HeaderWithToolbar";
import HeaderWithPersistentDrawer from "../common/HeaderWithPersistentDrawer";
import styles from "./styles";

function EmployeesList(props) {
  const style = {
    position: "fixed",
    bottom: 50,
    right: 30,
    cursor: "pointer",
    transitionDuration: "0.2s",
    transitionTimingFunction: "linear",
    transitionDelay: "0s",
    zIndex: 9999
  };
  const {
    getEmployees,
    employees,
    user,
    isLoading,
    location,
    history,
    skills,
    isAuthenticate,
    logout
  } = props;
  const parsed = parse(location.search);
  const initialState = {
    age: parsed.age || "",
    group: parsed.group || "",
    sort: parsed.sort || "",
    available: parsed.available || "",
    skills: parsed.skills || "",
    skillsObj: {
      value: parsed.skills || "",
      label: parsed.skills || ""
    }
  };
  const clearState = {
    age: "",
    group: "",
    sort: "",
    available: "",
    skills: "",
    skillsObj: {
      value: "",
      label: ""
    }
  };
  const [values, setValues] = React.useState(initialState);
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  function handleSkillChange(value) {
    console.log(value);
    if (value === null) {
      setValues(oldValues => ({
        ...oldValues,
        skills: "",
        skillsObj: { value: "", label: "" }
      }));
    } else {
      setValues(oldValues => ({
        ...oldValues,
        skills: value.value,
        skillsObj: value
      }));
    }
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
    const { skillsObj, ...query } = values;
    const queryStringified = queryCreator(query);
    history.push(`${path}?${queryStringified}`);
  }
  function handleClear() {
    const path = location.pathname;
    history.push(`${path}`);
    setValues({ ...clearState });
  }
  useEffect(() => {
    getEmployees(location.search);
  }, [getEmployees, location]);
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const { classes } = props;
  return (
    <div className={classes.mainContainer}>
      {/* <HeaderWithToolbar
        values={values}
        handleChange={handleChange}
        handleSkillChange={handleSkillChange}
        handleFilter={handleFilter}
        handleClear={handleClear}
        skills={skills}
        isAuthenticate={isAuthenticate}
        logout={logout}
        user={user}
      /> */}
      <HeaderWithPersistentDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        values={values}
        handleChange={handleChange}
        handleSkillChange={handleSkillChange}
        handleFilter={handleFilter}
        handleClear={handleClear}
        skills={skills}
        isAuthenticate={isAuthenticate}
        logout={logout}
        user={user}
      />
      <Container
        component="div"
        className={clsx(classes.employeesList, {
          [classes.contentShift]: open
        })}
        maxWidth="xl"
      >
        <ScrollToTop showUnder={160} style={style}>
          <Avatar>
            <ArrowUpward />
          </Avatar>
        </ScrollToTop>
        <CssBaseline />
        <Grid container direction="row" justify="space-evenly" spacing={6}>
          {isLoading ? (
            <CircularProgress
              className={clsx(classes.loader, { [classes.loaderShift]: open })}
            />
          ) : (
            employees.map(employee => (
              <EmployeeCard key={employee.employeeId} {...employee} />
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(EmployeesList);
