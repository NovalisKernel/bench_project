import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  a: {
    textDecoration: "none",
    color: "inherit"
  }
}));

export default function Header() {
  const classes = useStyles();
  const isAuthenticated = true;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.a} to="/">
              iTechArt bench info
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link className={classes.a} to="/new-employee">
              <Button color="inherit">Add new</Button>
            </Link>
          </Typography>
          {isAuthenticated ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <Typography variant="h6">
              <Link className={classes.a} to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
