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
    alignItems: "center",
    paddingBottom: 50
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
  gridContainer: {
    padding: "0 12px 0 12px"
  },
  submit: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(2)
  },
  loader: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
    zIndex: 9999
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
  input: {
    display: "none"
  },
  dropzone: {
    fontSize: "large",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 2,
    borderColor: "#ef1111",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    marginTop: theme.spacing(2),
    justifyContent: "center",
    height: 36
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButtonAdd: {
    zIndex: 1
  },
  fabButtonCopy: {
    zIndex: 1
  },
  fabButtonDelete: {
    zIndex: 1
  }
});

export default styles;
