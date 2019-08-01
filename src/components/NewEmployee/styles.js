const styles = theme => ({
  main: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  newEmployee: {
    paddingBottom: theme.spacing(8)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  grid: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%"
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  input: {
    display: "none"
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  techSkills: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "baseline"
  },
  techSkillsList: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  formTitle: {
    marginBottom: 0,
    marginLeft: "40px"
  }
});

export default styles;
