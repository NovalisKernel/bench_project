import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";
import DateFormats from "../../helpers/DateFormats";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
import { Link } from "react-router-dom";
import styles from "./styles";
import {
  // CardActions,
  // Button,
  // IconButton,
  // Collapse,
  // ListItemText,
  CardActionArea
} from "@material-ui/core";

function EmployeeCard(props) {
  const {
    classes,
    photoUrl,
    firstName,
    lastName,
    skills,
    group,
    employeeId,
    birthday,
    englishLevel,
    onProject,
    availabilityDate
  } = props;
  // const [expanded, setExpanded] = React.useState(false);

  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }
  const primarySkills = skills.filter(skill => skill.primary === true);
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
              <Typography gutterBottom variant="h5" component="h2">
                {firstName + " " + lastName}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {group.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Manager: {group.manager.firstName} {group.manager.lastName}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                English level: {englishLevel}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Age:{" "}
                {moment(new Date()).diff(
                  moment(birthday, "MM/DD/YYYY").format(DateFormats),
                  "years"
                )}
              </Typography>
              {onProject ? (
                <Typography variant="subtitle1" gutterBottom>
                  On project
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
              {primarySkills.length ? (
                <Typography variant="subtitle1" gutterBottom>
                  Primary skills:{" "}
                  {primarySkills.map(skill => skill["title"]).join(", ")}
                </Typography>
              ) : null}
              {/* {primarySkills.length ? (
            <List
              component="nav"
              aria-labelledby="primary-skills"
              subheader={
                <ListSubheader component="div" id="primary-skills">
                  Primary skills
                </ListSubheader>
              }
            >
              {primarySkills.map(primarySkill => (
                <ListItem button>
                  <ListItemText primary={primarySkill.name} />
                </ListItem>
              ))}
            </List>
          ) : null} */}
            </CardContent>
          </Link>
        </CardActionArea>
        {/* <IconButton
            className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            disabled={!skills.length}
            aria-label="Show more"
            visible={false}
          >
            <ExpandMoreIcon />
          </IconButton> */}
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List
              component="nav"
              aria-labelledby="skill-list"
              subheader={
                <ListSubheader component="div" id="skill-list">
                  Skill list
                </ListSubheader>
              }
            >
              {skills
                .filter(skill => skill.isPrimary !== true)
                .map(skill => (
                  <ListItem button>
                    <ListItemText primary={skill.name} />
                  </ListItem>
                ))}
            </List>
          </CardContent>
        </Collapse> */}
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(EmployeeCard);
