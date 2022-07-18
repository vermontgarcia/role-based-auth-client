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
  clientId: number,
) {
  return { id, firstName, lastName, username, email, role, clientId };
}

const rows = [
  createData(
    0,
    'Drake',
    'Alston',
    'drake',
    'drake.alston@mycompany.com',
    'Admin',
    101
  ),
  createData(
    1,
    'Lester',
    'Battle',
    'lester',
    'lester.battle@othercompany.com',
    'Client',
    101
  ),
  createData(
    2,
    'Camdem',
    'Baker',
    'camdem',
    'camdem.baker@othercompany.com',
    'Client',
    102
  ),
  createData(
    3,
    'Yetta',
    'Mullins',
    'yetta',
    'yetta.mullins@mycompany.com',
    'User',
    103
  ),
  createData(
    4,
    'Yasir',
    'Landry',
    'yasir',
    'yasir.landry@mycompany.com',
    'User',
    104
  ),
  createData(
    5,
    'Alice',
    'Wrap',
    'alice',
    'alice.wrap@mycompany.com',
    'User',
    105
  ),
  createData(
    6,
    'Json',
    'McCoy',
    'json',
    'json.mccoy@mycompany.com',
    'User',
    106
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