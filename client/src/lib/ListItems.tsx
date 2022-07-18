import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = [
  {
    id: 1001,
    title: 'Dashboard',
    route: '/',
    Icon: <DashboardOutlinedIcon />,
  },
  {
    id: 1002,
    title: 'Users Managment',
    route: '/users',
    Icon: <ManageAccountsOutlinedIcon />,
  },
  {
    id: 1003,
    title: 'Add New User',
    route: '/users/addnew',
    Icon: <GroupAddOutlinedIcon />,
  },
];

export const secondaryListItems =[
  {
    id: 2001,
    title: 'Help',
    route: '/help',
    Icon: <HelpOutlineIcon />,
  },
  {
    id: 2002,
    title: 'logout',
    route: '/logout',
    Icon: <LogoutIcon />,
  },
];
