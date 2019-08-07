import React from "react";
import FindIcon from "@material-ui/icons/FindInPage";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
};

function NotFound(props) {
  const { classes } = props;
  return (
    <div className={classes.center}>
      <FindIcon className={classes.emptyStateIcon} color="action" />
      <Typography color="textSecondary" variant="h4">
        Content Not Found
      </Typography>
      <Typography color="textSecondary" variant="subtitle1">
        The requested URL was not found on this server
      </Typography>
      <Fab
        className={classes.button}
        color="secondary"
        component={Link}
        to="/"
        variant="extended"
      >
        <HomeIcon className={classes.buttonIcon} /> Go Home
      </Fab>
    </div>
  );
}

export default withStyles(styles)(NotFound);
