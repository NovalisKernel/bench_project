import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { emphasize, makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: 180
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    marginBottom: 80
  },
  divider: {
    height: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;
  return (
    <TextField
      fullWidth
      className={classes.textField}
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  const { selectProps, innerProps = {}, children } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  MultiValue
};

export function SingleInput(props) {
  const { skills, handleChange, values } = props;
  const options = skills.map(item => {
    return { value: item, label: item };
  });
  const classes = useStyles();
  const theme = useTheme();

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          inputId="skill"
          TextFieldProps={{
            label: "Skills",
            InputLabelProps: {
              htmlFor: "skill",
              shrink: true
            }
          }}
          isClearable
          placeholder="Skills"
          options={options}
          components={components}
          value={values.skillsObj}
          onChange={handleChange}
        />
      </NoSsr>
    </div>
  );
}

export function MultiplyWithCreatableInput(props) {
  const { skills, values, form, field, label, error, helperText, id } = props;
  const { handleBlur } = form;
  const valuesMap = values.map(item => {
    if (item.title) {
      return { value: item.title, label: item.title };
    } else if (item.title === "") return null;
    return { value: item, label: item };
  });
  const options = skills.map(item => {
    return { value: item, label: item };
  });
  const classes = useStyles();
  const theme = useTheme();
  const onChange = option => {
    let value = [];
    if (option)
      form.setFieldValue(
        field.name,
        option.map(item => ({
          title: item.value
        }))
      );
    else form.setFieldValue(field.name, value);
  };
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <CreatableSelect
          classes={classes}
          styles={selectStyles}
          inputId={id}
          TextFieldProps={{
            label: `${label}`,
            InputLabelProps: {
              htmlFor: `${id}`,
              shrink: true
            },
            error: error,
            helperText: helperText,
            onBlur: handleBlur
          }}
          name={field.name}
          isClearable
          placeholder={label}
          options={options}
          components={components}
          value={valuesMap}
          onChange={onChange}
          isMulti
        />
      </NoSsr>
    </div>
  );
}
