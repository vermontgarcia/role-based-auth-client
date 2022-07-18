import { ChangeEvent, Fragment, useState } from 'react';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { usersData } from '../lib/UsersData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import UserDataGard from '../lib/UserDataGuard';

const authenticatedUser = {
  id: 7,
  firstName: 'Vermont',
  lastName: 'Garcia',
  username: 'vermont',
  email: 'vermont.garcia@mycompany.com',
  role: 'Admin',
  clientId: 102,
}

const UsersList = () => {
  const { userAllowedData } = new UserDataGard(authenticatedUser, usersData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userAllowedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
                <TableCell children={<Link to={`/users/${row.id}`}>{row.firstName}</Link>} />
                <TableCell children={<Link to={`/users/${row.id}`}>{row.lastName}</Link>} />
                <TableCell children={<Link to={`/users/${row.id}`}>{row.username}</Link>} />
                <TableCell children={<Link to={`/users/${row.id}`}>{row.email}</Link>} />
                <TableCell children={<Link to={`/users/${row.id}`}>{row.role}</Link>} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={userAllowedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Fragment>
  );
}

export default UsersList;