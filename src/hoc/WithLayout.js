import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 200px"
  }
}));

export const withLayout = Component => props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <Component {...props} />
      </main>
      <Footer />
    </div>
  );
};
