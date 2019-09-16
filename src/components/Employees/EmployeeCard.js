import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import styles from "./styles";

function EmployeeCard(props) {
  const {
    classes,
    photoUrl,
    firstName,
    lastName,
    technicalSkills,
    group,
    employeeId,
    onProject,
    seniorityLevel,
    availabilityDate,
    englishLevel
  } = props;

  const primarySkills = technicalSkills.slice(0, 3);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardAction}>
          <Link className={classes.a} to={`/edit/${employeeId}`}>
            <CardMedia
              className={classes.media}
              image={photoUrl}
              title="Avatar"
            />
            <CardContent>
              <Typography className={classes.titleName} gutterBottom variant="h5" component="h2">
                {firstName + " " + lastName}
              </Typography>
              {group ? (
                <Typography variant="subtitle1" gutterBottom>
                  {group.name}
                </Typography>
              ) : null}
              {group && group.manager ? (
                <Typography variant="subtitle1" gutterBottom>
                  Manager: {group.manager.firstName} {group.manager.lastName}
                </Typography>
              ) : null}
              {new Date(availabilityDate) < now ? (
                <Typography variant="subtitle1" gutterBottom>
                  From now
                </Typography>
              ) : availabilityDate ? (
                <Typography variant="subtitle1" gutterBottom>
                  Availability date: {availabilityDate}
                </Typography>
              ) : null}
              {onProject ? (
                <Typography variant="subtitle1" gutterBottom>
                  On project
                </Typography>
              ) : null}
              {seniorityLevel ? (
                <Typography variant="subtitle1" gutterBottom>
                  {seniorityLevel}
                </Typography>
              ) : null}
              {englishLevel ? (
                <Typography variant="subtitle1" gutterBottom>
                  {englishLevel}
                </Typography>
              ) : null}
              {primarySkills.length ? (
                <Typography variant="subtitle1" gutterBottom>
                 Tech skills:{" "}
                  {primarySkills.map(skill => skill["title"]).join(", ")}
                </Typography>
              ) : null}
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(EmployeeCard);
