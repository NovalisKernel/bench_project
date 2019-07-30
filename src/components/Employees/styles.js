const styles = theme => ({
  employeesList: {
    paddingBottom: theme.spacing(8)
  },
  card: {
    minWidth: 275,
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 300
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  a: {
    textDecoration: "none",
    color: "inherit"
  }
});

export default styles;
