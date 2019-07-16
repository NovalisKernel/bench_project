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
import styles from "./styles";
import {
  CardActions,
  Button,
  IconButton,
  Collapse,
  ListItemText
} from "@material-ui/core";

function EmployeeCard(props) {
  const { classes, image, firstname, lastname, skills } = props;
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} title="Avatar" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstname + " " + lastname}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Edit user
          </Button>
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
            <List component="nav" aria-label="Skill list">
              {skills.map(skill => (
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
