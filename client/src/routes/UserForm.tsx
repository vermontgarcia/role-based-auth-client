import { FormEvent, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';
import { AlertType } from '../types/User';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../App.css';

const theme = createTheme();

const UserForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<AlertType>({severity: "success", message: ""});
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'), 
      username: data.get('username'),
      email: data.get('email'),
      role: data.get('role'),
      clientId: data.get('clientId'),
      password: data.get('password'),
      confirmPassword: data.get('password'),
    };
    console.log(user)
    try {
      const { data } = await createUser(user);
      console.log(data)
      navigate('/users');
    } catch (error){
      console.log(error)
      setAlert({
        severity: 'error',
        message: `${error.response.data.msg}`
      });
      setOpen(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
          <Typography component="h1" variant="h5" sx={{ mb: 6 }}>
            Add New User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
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
                    >
                      <MenuItem value={100}>My Company</MenuItem>
                      <MenuItem value={101}>Other Company One</MenuItem>
                      <MenuItem value={102}>Other Company Two</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
              <TextField
              id="password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              label="Password"
              name="password"
              required
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" maxWidth={'xs'}>
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 12, mb: 2 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={12}
              label="Age"
              onChange={()=>{}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
        </Box>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
      >
        <Alert severity={alert.severity} onClose={handleClose}>
          {alert.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default UserForm;