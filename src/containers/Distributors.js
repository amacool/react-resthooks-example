import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import { useResource } from 'rest-hooks';
import DistributorResource from '../rest-api/Distributor.ts';
import CustomTable from "../components/CustomTable";
import { FilterIcon, DownloadIcon } from "../components/SvgIcons";

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

function Distributors() {
  const [page, setPage] = React.useState(1);
  const classes = useStyles();
  const results = useResource(DistributorResource.listShape(), { _page: page, limit: 50, _sort: 'balance', order: 'asc' });

  return (
    <main className={classes.content}>
      <Paper className={classes.mainTitle}>
        <div className={classes.titleLeft}>
          <span>Distributors</span>
          <span>(788)</span>
        </div>
        <div className={classes.titleRight}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<FilterIcon/>}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<DownloadIcon />}
          >
            Export
          </Button>
        </div>
      </Paper>
      <Paper className={classes.table}>
        <CustomTable distributors={results} getDistributors={(page) => setPage(page)} />
      </Paper>
    </main>
  )
}

export default Distributors;