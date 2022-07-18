import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Users from './routes/Users';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import UserDetails from './routes/UserDetails';
import UserForm from './routes/UserForm';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignUpForm />} />
      <Route path='/logout' element={<LoginForm />} />
      <Route path='/' element={<Home />} >
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UserDetails />} />
        <Route path='users/addnew' element={<UserForm />} />
        <Route path='help' element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
