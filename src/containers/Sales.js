import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    color: '#414142',
    fontFamily: 'Avenir, Avenir',
  },
  mainTitle: {
    padding: theme.spacing(1, 3),
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 1px 3px #0000000A',
    border: '1px solid #EAEDF3',
    '& button': {
      backgroundColor: 'white',
      border: 'solid 1px #D8DCE6',
      boxShadow: '0px 1px 2px #00000014',
      fontSize: 14,
      textTransform: 'none',
      color: '#3E3F42',
      '&:hover': {
        backgroundColor: 'white'
      }
    }
  },
  table: {

  },
  titleLeft: {
    '& > span:first-child': {
      fontSize: 26,
      marginRight: 10
    },
    '& > span:last-child': {
      fontSize: 14,
      color: '#9EA0A5'
    }
  },
  titleRight: {

  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Sales() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Paper className={classes.mainTitle}>
        <div className={classes.titleLeft}>
          <span>Sales</span>
        </div>
        <div className={classes.titleRight}>

        </div>
      </Paper>
      <Paper className={classes.table}>

      </Paper>
    </main>
  )
}

export default Sales;