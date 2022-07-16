import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
  <Fragment>
    <Link to={'/'} >
      <ListItemButton>
        <ListItemIcon>
          <DashboardOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to={'users'}>
      <ListItemButton>
          <ListItemIcon>
            <ManageAccountsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Users Managment" />
      </ListItemButton>
    </Link>
    <Link to={'/users/addnew'}>
      <ListItemButton>
        <ListItemIcon>
          <GroupAddOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Add New User" />
      </ListItemButton>
    </Link>
  </Fragment>
);

export const secondaryListItems = (
  <Fragment>
    <Link to={'help'} >
      <ListItemButton>
        <ListItemIcon>
          <HelpOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItemButton>
    </Link>
    <Link to={'logout'} >
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </Link>
  </Fragment>
);