import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const  ListItem = (props: {title: string; route: string; Icon: ReactNode}) => {

  const { title, route, Icon } = props;

  return (
    <Link to={route} >
      <ListItemButton>
        <ListItemIcon children={Icon} />
        <ListItemText primary={title} />
      </ListItemButton>
    </Link>
  )
}

export default ListItem;
