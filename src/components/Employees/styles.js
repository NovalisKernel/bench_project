const styles = theme => ({
    card: {
      minWidth: 275,
      marginTop: theme.spacing(8)
    },
    media: {
      height: 140
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  });

  export default styles;