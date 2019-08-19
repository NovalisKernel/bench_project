const drawerWidth = 240;

const styles = theme => ({
  employeesList: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(8)
  },
  card: {
    minWidth: 275,
    maxWidth: 275,
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 650
  },
  cardAction: {
    height: 650,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "start"
  },
  loader: {
    position: "fixed",
    left: 0,
    [theme.breakpoints.up("sm")]: {
      left: drawerWidth
    },
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
    zIndex: 9999
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
  },
  formControl: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    width: 180
  },
  filterButton: {
    marginTop: theme.spacing(5),
    margin: theme.spacing(1)
  },
  list: {
    display: "flex",
    justifyContent: "center"
  },
  mainContainer: {
    display: "flex"
  },
  group: {
    margin: theme.spacing(1, 0, 0, 2)
  }
});

export default styles;
