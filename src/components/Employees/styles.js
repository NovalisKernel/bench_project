const drawerWidth = 300;

const styles = theme => ({
  employeesList: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
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
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
    zIndex: 9999
  },
  loaderShift: {
    position: "fixed",
    left: drawerWidth,
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
  titleName: {
    overflowWrap: "break-word"
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
    width: 240
  },
  filterButton: {
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
  },
  filtersButton: {
    position: "fixed",
    bottom: 0,
    width: drawerWidth,
    backgroundColor: "lightgray"
  },
  lastFilter: {
    paddingBottom: theme.spacing(9)
  }
});

export default styles;
