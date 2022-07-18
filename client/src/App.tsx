import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Users from './routes/Users';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import UserDetails from './routes/UserDetails';
import UserForm from './routes/UserForm';
import Logout from './routes/Logout';
import RequireAuth from './components/RequireAuth';
import { ADMIN, CLIENT, USER } from './lib/Consts';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignUpForm />} />
      <Route path='/logout' element={<Logout />} />
      <Route element={<RequireAuth allowedRoles={[USER, ADMIN, CLIENT]} />}>
        <Route path='/' element={<Home />} >
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UserDetails />} />
        <Route element={<RequireAuth allowedRoles={[ADMIN, CLIENT]} />}>
          <Route path='users/addnew' element={<UserForm />} />
        </Route>
      </Route>
      <Route path='help' element={<Users />} />
        </Route>
    </Routes>
  );
}

export default App;
