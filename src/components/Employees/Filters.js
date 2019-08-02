import React from "react";
import {
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  Button
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import Ages from "../../enums/Ages";
import Groups from "../../enums/Groups";

function Filters(props) {
  const { classes, values, handleChange, handleFilter } = props;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="age">Age</InputLabel>
          <Select
            onChange={handleChange}
            value={values.age}
            input={
              <OutlinedInput labelWidth={labelWidth} name="age" id="age" />
            }
          >
            {Ages.map(item => (
              <MenuItem key={item._id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="group">Group</InputLabel>
          <Select
            onChange={handleChange}
            value={values.group}
            input={
              <OutlinedInput labelWidth={labelWidth} name="group" id="group" />
            }
          >
            {Groups.map(item => (
              <MenuItem key={item._id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="sort">Date</InputLabel>
          <Select
            onChange={handleChange}
            value={values.sort}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="sort"
                id="sort"
              />
            }
          >
            <MenuItem value=""></MenuItem>  
            <MenuItem value="availabilityDate,asc">Ascending</MenuItem>
            <MenuItem value="availabilityDate,desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="available">Available</InputLabel>
          <Select
            onChange={handleChange}
            value={values.available}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="available"
                id="available"
              />
            }
          >
            <MenuItem value=""></MenuItem>  
            <MenuItem value="true">Available</MenuItem>
            <MenuItem value="false">Not available</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button size="large" variant="contained" color="primary" className={classes.filterButton} onClick={handleFilter}>
            Filter
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Filters);
