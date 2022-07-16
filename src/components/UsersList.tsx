import { ChangeEvent, Fragment, useState } from 'react';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate User Data
function createData(
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  role: string,
) {
  return { id, firstName, lastName, username, email, role };
}

const rows = [
  createData(
    0,
    'Elvis',
    'Presley',
    'king',
    'elvis.presley@mycompany.com',
    'Admin',
  ),
  createData(
    1,
    'Paul',
    'McCartney',
    'paul',
    'paul.mccartney@othercompany.com',
    'Client',
  ),
  createData(
    2,
    'Tom',
    'Scholz',
    'tommy',
    'tom.scholz@othercompany.com',
    'Client',
  ),
  createData(
    3,
    'Michael',
    'Jackson',
    'michael',
    'michael.jackson@mycompany.com',
    'User',
  ),
  createData(
    4,
    'Bruce',
    'Springsteen',
    'bruce',
    'bruce.springsteen@mycompany.coms',
    'User',
  ),
  createData(
    5,
    'Bruce',
    'Springsteen',
    'bruce',
    'bruce.springsteen@mycompany.coms',
    'User',
  ),
  createData(
    6,
    'Bruce',
    'Springsteen',
    'bruce',
    'bruce.springsteen@mycompany.coms',
    'User',
  ),
];

const UsersList = () => {
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
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow component={Link} to={`/users/${row.id}`} key={row.id}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Fragment>
  );
}

export default UsersList;