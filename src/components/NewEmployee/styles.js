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
    width: "180px",
    marginRight: "20px"
  },
  formTitle: {
    marginBottom: 0,
    marginLeft: "40px"
  }
});

export default styles;
