import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

const styles = () => ({
  no_content__wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 10px",
  },
});

function NoContent({ classes }) {
  return (
    <div className={classes.no_content__wrapper}>
      <Typography variant="h5">
        No result
      </Typography>
    </div>
  );
}

export default withStyles(styles)(NoContent);