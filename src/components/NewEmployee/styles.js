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
    backgroundColor: theme.palette.secondary.main,
    width: 150,
    height: 150
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
    marginTop: theme.spacing(2)
  },
  input: {
    display: "none"
  },
  button: {
    marginTop: theme.spacing(2)
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
  },
  dropzone: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    marginTop: theme.spacing(2),
    justifyContent: "center",
    height: 36
  }
});

export default styles;
