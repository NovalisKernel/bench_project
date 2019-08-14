import React from "react";
import {
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Icon,
  IconButton
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import HighlightOff from "@material-ui/icons/HighlightOff";
import Autocomplete from "../common/Autocomplete";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Ages from "../../enums/Ages";
import Groups from "../../enums/Groups";

function Filters(props) {
  const {
    classes,
    values,
    handleChange,
    handleSkillChange,
    handleFilter,
    handleClear,
    skills
  } = props;

  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <Autocomplete
            skills={skills}
            handleChange={handleSkillChange}
            values={values}
          />
        </FormControl>
      </Grid>
      {/* <Grid item>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          fullWidth
        >
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Age</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RadioGroup
                aria-label="age"
                name="age"
                value={values.age}
                className={classes.group}
                onChange={handleChange}
              >
                {Ages.map(item => (
                  <FormControlLabel
                    key={item._id}
                    value={item.value}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          fullWidth
        >
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Group</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RadioGroup
                aria-label="group"
                name="group"
                value={values.group}
                className={classes.group}
                onChange={handleChange}
              >
                {Groups.map(item => (
                  <FormControlLabel
                    key={item._id}
                    value={item.value}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          fullWidth
        >
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Date</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RadioGroup
                aria-label="sort"
                name="sort"
                value={values.sort}
                className={classes.group}
                onChange={handleChange}
              >
                <FormControlLabel value="" control={<Radio />} label="None" />
                <FormControlLabel
                  value="availabilityDate,asc"
                  control={<Radio />}
                  label="Ascending"
                />
                <FormControlLabel
                  value="availabilityDate,desc"
                  control={<Radio />}
                  label="Descending"
                />
              </RadioGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          fullWidth
        >
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Available</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RadioGroup
                aria-label="available"
                name="available"
                value={values.available}
                className={classes.group}
                onChange={handleChange}
              >
                <FormControlLabel value="" control={<Radio />} label="None" />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Available"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Not available"
                />
              </RadioGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </FormControl>
      </Grid> */}
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <FormLabel component="legend">Age</FormLabel>
          <RadioGroup
            aria-label="age"
            name="age"
            value={values.age}
            className={classes.group}
            onChange={handleChange}
          >
            {Ages.map(item => (
              <FormControlLabel
                key={item._id}
                value={item.value}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <FormLabel component="legend">Group</FormLabel>
          <RadioGroup
            aria-label="group"
            name="group"
            value={values.group}
            className={classes.group}
            onChange={handleChange}
          >
            {Groups.map(item => (
              <FormControlLabel
                key={item._id}
                value={item.value}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <FormLabel component="legend">Date</FormLabel>
          <RadioGroup
            aria-label="sort"
            name="sort"
            value={values.sort}
            className={classes.group}
            onChange={handleChange}
          >
            <FormControlLabel value="" control={<Radio />} label="None" />
            <FormControlLabel
              value="availabilityDate,asc"
              control={<Radio />}
              label="Ascending"
            />
            <FormControlLabel
              value="availabilityDate,desc"
              control={<Radio />}
              label="Descending"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <FormLabel component="legend">Available</FormLabel>
          <RadioGroup
            aria-label="available"
            name="available"
            value={values.available}
            className={classes.group}
            onChange={handleChange}
          >
            <FormControlLabel value="" control={<Radio />} label="None" />
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Available"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Not available"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {/* <Grid item>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.filterButton}
          onClick={handleFilter}
        >
          Filter
        </Button>
      </Grid>
      <Grid item>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.filterButton}
          onClick={handleClear}
        >
          X
        </Button>
      </Grid> */}
      <Grid item>
        <IconButton
          className={classes.filterButton}
          onClick={handleFilter}
          color="primary"
        >
          <CheckCircleOutline />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          className={classes.filterButton}
          onClick={handleClear}
          color="secondary"
        >
          <HighlightOff />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Filters);
