import React from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import styles from "./styles";
import {
  CardActions,
  Button,
  IconButton,
  Collapse,
  ListItemText
} from "@material-ui/core";

function EmployeeCard(props) {
  const {
    classes,
    image,
    firstname,
    lastname,
    skills,
    group,
    id,
    onproject,
    availabilitydate
  } = props;
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const primarySkills = skills.filter(skill => skill.isPrimary === true);
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} title="Avatar" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstname + " " + lastname}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Group: {group}
          </Typography>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                name="onproject"
                value="onproject"
                checked={onproject}
                color="primary"
                disabled={true}
              />
            }
            label="On project"
            labelPlacement="end"
          />
          <Typography variant="subtitle1" gutterBottom>
            Availability date: {availabilitydate}
          </Typography>
          {primarySkills.length ? (
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
          ) : null}
        </CardContent>
        <CardActions>
          <Link className={classes.a} to={`/edit/${id}`}>
            <Button size="small" color="primary">
              Edit user
            </Button>
          </Link>
          <Button size="small" color="primary">
            Delete user
          </Button>
          <IconButton
            className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            disabled={!skills.length}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
        </Collapse>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(EmployeeCard);
