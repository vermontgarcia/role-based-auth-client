import { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { getUsersList } from '../services/userService';
import { UserDataType } from '../types/User';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import UserDataGard from '../lib/UserDataGuard';

const UsersList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState<UserDataType[]>([]);
  

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await getUsersList();
      console.log(data)
      const authenticatedUser = JSON.parse(localStorage.getItem('user') || '');
      const { userAllowedData } = new UserDataGard(authenticatedUser, data?.list);
      setUsers(userAllowedData)
    }
    fetchData();
  }, []);

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
          {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row._id}>
                <TableCell children={<Link to={`/users/${row._id}`}>{row.firstName}</Link>} />
                <TableCell children={<Link to={`/users/${row._id}`}>{row.lastName}</Link>} />
                <TableCell children={<Link to={`/users/${row._id}`}>{row.username}</Link>} />
                <TableCell children={<Link to={`/users/${row._id}`}>{row.email}</Link>} />
                <TableCell children={<Link to={`/users/${row._id}`}>{row.role}</Link>} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Fragment>
  );
}

export default UsersList;