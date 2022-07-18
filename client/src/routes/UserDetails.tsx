import { FormEvent, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';
import { AlertType } from '../types/User';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../App.css';

const theme = createTheme();

const UserDetails = () => {
  const navigate = useNavigate();

  const [alert, setAlert] = useState<AlertType>({severity: "success", message: ""});
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const username = `${firstName?.toString().toLowerCase()}${lastName?.toString().toLowerCase()}`;
    const user = {
      firstName,
      lastName, 
      username,
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('password'),
    };
    try {
      const { data } = await signup(user);
      console.log(data)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            User details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
            </Grid>
          </Box>
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

export default UserDetails;