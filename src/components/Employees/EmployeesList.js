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
import Pagination from "../common/Pagination";

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
    getTechSkills,
    getSoftSkills,
    employees,
    user,
    isLoading,
    location,
    history,
    techSkills,
    isAuthenticate,
    logout,
    pages
  } = props;
  const parsed = parse(location.search, { arrayFormat: "comma" });
  const parsSkills = parsed.technicalSkills
    ? Array.isArray(parsed.technicalSkills)
      ? parsed.technicalSkills.map(item => ({ value: item, label: item }))
      : [{ value: parsed.technicalSkills, label: parsed.technicalSkills }]
    : [];
  const initialState = {
    available: parsed.available || "",
    technicalSkills: parsed.technicalSkills || [],
    skillsObj: parsSkills,
    seniorityLevel: parsed.seniorityLevel || "",
    page: parsed.page || 0,
    size: parsed.size || 15, 
  };
  const clearState = {
    available: "",
    technicalSkills: [],
    skillsObj: [],
    seniorityLevel: ""
  };
  const [values, setValues] = React.useState(initialState);
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  function handleSkillChange(value) {
    if (value === null) {
      setValues(oldValues => ({
        ...oldValues,
        technicalSkills: [],
        skillsObj: []
      }));
    } else {
      const mapValue = value.map(item => item.value);
      setValues(oldValues => ({
        ...oldValues,
        technicalSkills: mapValue,
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
    return stringify(filters, { arrayFormat: "comma" });
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
    getTechSkills();
    getSoftSkills();
  }, [getEmployees, location, getTechSkills, getSoftSkills]);
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function handlePageClick(page) { 
    setValues(oldValues => ({
      ...oldValues,
      page: page.selected
    }));
    const path = location.pathname;
    history.push(`${path}?page=${page.selected}&size=${values.size}`);
  }
  const { classes } = props;
  return (
    <div className={classes.mainContainer}>
      <HeaderWithPersistentDrawer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        values={values}
        handleChange={handleChange}
        handleSkillChange={handleSkillChange}
        handleFilter={handleFilter}
        handleClear={handleClear}
        skills={techSkills}
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
        {
          !isLoading && 
          <Pagination pages={pages} handlePageClick={handlePageClick} page={values.page} />
        }
      </Container>
    </div>
  );
}

export default withStyles(styles)(EmployeesList);
