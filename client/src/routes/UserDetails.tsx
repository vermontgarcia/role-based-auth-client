import { Fragment, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { UserDataType } from '../types/User';
import { getUserById } from '../services/userService';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../App.css';

const theme = createTheme();

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState<UserDataType>({});
  const [isLoadin, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      const { data } = await getUserById(id || '');
      setUser(data.user);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {!isLoadin && (
            <Fragment>
              <Typography component="h1" variant="h5" sx={{ mb: 6 }}>
                User details
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id="firstName"
                      label="First Name"
                      value={user?.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      value={user?.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      id="username"
                      label="Username"
                      value={user?.username}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      value={user?.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="role-label">Role</InputLabel>
                        <Select
                          labelId='role-label'
                          required
                          fullWidth
                          id="role"
                          label="Role"
                          name="role"
                          value={user?.role}
                          readOnly
                        >
                          <MenuItem value={"User"}>User</MenuItem>
                          <MenuItem value={"Client"}>Client</MenuItem>
                          <MenuItem value={"Admin"}>Admin</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="client-id-label">Client</InputLabel>
                        <Select
                          labelId='client-id-label'
                          required
                          fullWidth
                          id="clientId"
                          label="Client"
                          name="clientId"
                          value={user?.clientId}
                          readOnly
                          sx={{ mb: 2 }}
                        >
                          <MenuItem value={100}>My Company</MenuItem>
                          <MenuItem value={101}>Other Company One</MenuItem>
                          <MenuItem value={102}>Other Company Two</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Fragment>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserDetails;
