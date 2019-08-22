import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../containers/header/HeaderContainer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  }
}));

export const withoutFooter = Component => props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header />
      <main className={classes.main}>
        <Component {...props} />
      </main>
    </div>
  );
};