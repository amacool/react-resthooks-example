import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import { Route, Switch, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Sales from './containers/Sales';
import Customers from './containers/Customers';
import Settings from './containers/Settings';
import Products from './containers/Products';
import Support from './containers/Support';
import Distributors from './containers/Distributors';
import Home from './containers/Home';
import {
  SupportIcon,
  SettingsIcon,
  ProductsIcon,
  CustomersIcon,
  SalesIcon,
  HomeIcon,
  StarIcon
} from "./components/SvgIcons";
import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'white',
    width: '100%',
    marginLeft: 0,
    zIndex: 1300
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#373737',
    color: 'white'
  },
  customAppBar: {
    boxShadow: '0px 1px 0px #0000000F'
  },
  toolbar: theme.mixins.toolbar,
  customToolbar: {
    boxShadow: 'none !important'
  },
  contentContainer: {
    marginTop: 70,
    width: '100%'
  },
  leftMenu: {
    padding: 8,
    '& > div': {
      padding: '4px 0',
      margin: '8px 0',
      borderRadius: 4,
      '&:hover': {
        backgroundColor: '#257A91'
      },
      '& > div:first-child': {
        minWidth: 45,
        '& > svg': {
          margin: '0 auto'
        }
      }
    }
  }
}));

function App({ history }) {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar, classes.customAppBar)}>
          <Toolbar>
            <img width={109} src="/img/logo.png" alt="" />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={clsx(classes.toolbar, classes.customToolbar)} />
          <Divider />
          <List className={classes.leftMenu}>
            <ListItem button onClick={() => history.push('/home')}>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => history.push('/distributors')}>
              <ListItemIcon><StarIcon/></ListItemIcon>
              <ListItemText primary="Distributors" />
            </ListItem>
            <ListItem button onClick={() => history.push('/sales-page')}>
              <ListItemIcon><SalesIcon/></ListItemIcon>
              <ListItemText primary="Sales Page" />
            </ListItem>
            <ListItem button onClick={() => history.push('/products')}>
              <ListItemIcon><ProductsIcon/></ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button onClick={() => history.push('/customers')}>
              <ListItemIcon><CustomersIcon/></ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
          </List>
          <Divider style={{backgroundColor: '#888'}} />
          <List className={classes.leftMenu}>
            <ListItem button onClick={() => history.push('/settings')}>
              <ListItemIcon><SettingsIcon/></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={() => history.push('/support')}>
              <ListItemIcon><SupportIcon/></ListItemIcon>
              <ListItemText primary="Support" />
            </ListItem>
          </List>
        </Drawer>

        <div className={classes.contentContainer}>
          <Suspense fallback={<CircularProgress />}>
            <NetworkErrorBoundary>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/distributors" component={Distributors}/>
                <Route path="/sales-page" component={Sales}/>
                <Route path="/products" component={Products}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/support" component={Support}/>
              </Switch>
            </NetworkErrorBoundary>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
