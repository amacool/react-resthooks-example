import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { ThreeDots, IconLeft, IconRight } from '../SvgIcons';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'distributor', numeric: false, disablePadding: true, label: 'DISTRIBUTOR' },
  { id: 'acctCreated', numeric: true, disablePadding: false, label: 'ACCT CREATED' },
  { id: 'acctStatus', numeric: true, disablePadding: false, label: 'ACCT STATUS' },
  { id: 'salesPage', numeric: true, disablePadding: false, label: 'SALES PAGES' },
  { id: 'balanceAvail', numeric: true, disablePadding: false, label: 'BALANCE AVAIL' },
  { id: 'totalCollected', numeric: true, disablePadding: false, label: 'TOTAL COLLECTED' },
  { id: 'extra', numeric: true, disablePadding: false, label: '' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tableHeader}>
        {headCells.map(headCell => (
          <TableCell
            style={{textAlign: headCell.id === 'distributor' ? 'left' : 'right'}}
            key={headCell.id}
            align={'left'}
            padding={'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {/* <span onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              <span>
                {orderBy !== headCell.id && (
                  'not'
                )}
                {orderBy === headCell.id && (
                  order === 'desc' ? 'desc' : 'asc'
                )}
              </span>
            </span> */}
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
    '& > th': {
      borderBottom: '1px solid #EAEDF3 !important'
    },
    '& > td': {
      borderBottom: '1px solid #EAEDF3 !important'
    }
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableHeader: {
    '& > th': {
      color: '#9EA0A5',
      fontWeight: 'normal',
      '&:first-child': {
        paddingLeft: 30
      },
      '&:last-child': {
        paddingRight: 30
      }
    }
  },
  tableBody: {
    '& > tr > td': {
      fontWeight: 'normal',
      '&:first-child': {
        paddingLeft: 30
      },
      '&:last-child': {
        paddingRight: 30,
        '& > svg': {
          cursor: 'pointer'
        }
      }
    }
  },
  profile: {
    display: 'flex',
    justifyContent: 'left'
  },
  profileLeft: {
    display: 'flex',
    alignItems: 'center',
    '& > img': {
      borderRadius: '50%',
      width: 38,
      height: 38
    }
  },
  profileRight: {
    textAlign: 'left',
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > div:first-child': {
      fontStyle: 'bold',
      color: '#3E3F42',
      fontSize: 14
    },
    '& > div:last-child': {
      fontSize: 12,
      color: '#9EA0A5',
    },
  },
  status: {
    minWidth: 67,
    height: 24,
    backgroundColor: '#F8F8F8',
    border: '1px solid #E2E5ED',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    float: 'right'
  },
  active: {
    backgroundColor: '#B0DFE5'
  },
  sales: {
    minWidth: 40,
    maxWidth: 40
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '15px 25px',
    '& > span': {
      width: 30,
      height: 30,
      marginLeft: 15,
      border: 'solid 1px grey',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }
}));

export default function EnhancedTable({ distributors, getDistributors }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [rowsDetail, setRowsDetail] = React.useState([]);

  React.useEffect(() => {
    const rows = distributors.map(user => ({
      id: user.id,
      distributor: `${user.firstName} ${user.lastName}`,
      acctCreated: user.registered,
      acctStatus: user.isActive,
      salesPage: 2,
      balanceAvail: user.balance,
      totalCollected: user.totalCollected,
      extra: ''
    }));
    const rowsDetail = distributors.map(user => ({
      id: user.id,
      picture: user.picture,
      email: user.email,
      distributor: `${user.firstName} ${user.lastName}`,
      acctCreated: user.registered,
      acctStatus: user.isActive,
      salesPage: 2,
      balanceAvail: user.balance,
      totalCollected: user.totalCollected,
      extra: ''
    }));
    setRows(rows);
    setRowsDetail(rowsDetail);
  }, [distributors]);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    if (newPage < 0) return;
    setPage(newPage);
    getDistributors(newPage + 1);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - rows.length;

  const getFormatedDate = (str) => {
    const date = new Date(str);
    const monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  const sortedRows = stableSort(rows, getSorting(order, orderBy));
  const sortedRowsDetail = stableSort(rowsDetail, getSorting(order, orderBy));

  return (
    <div className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={'medium'}
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody className={classes.tableBody}>
            {sortedRows
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <TableRow
                    hover
                    onClick={event => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell align="right">
                      <div className={classes.profile}>
                        <div className={classes.profileLeft}>
                          <img src={sortedRowsDetail[index].picture} alt="" />
                        </div>
                        <div className={classes.profileRight}>
                          <div>{sortedRowsDetail[index].distributor}</div>
                          <div>{sortedRowsDetail[index].email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{getFormatedDate(row.acctCreated)}</TableCell>
                    <TableCell align="right">
                      <div className={clsx(classes.status, row.acctStatus && classes.active)}>{row.acctStatus ? 'Active' : 'Inactive'}</div>
                    </TableCell>
                    <TableCell align="right"><div className={clsx(classes.sales, classes.status)}>{row.salesPage}</div></TableCell>
                    <TableCell align="right">${row.balanceAvail}</TableCell>
                    <TableCell align="right">${row.totalCollected}</TableCell>
                    <TableCell align="right"><ThreeDots color="#9ea0a5"/></TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={classes.pagination}>
        <span onClick={() => handleChangePage(page - 1)}><IconLeft/></span>
        <span>{page + 1}</span>
        <span onClick={() => handleChangePage(page + 1)}><IconRight/></span>
      </div>
    </div>
  );
}