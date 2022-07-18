import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../services/authService"

const Logout = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    logout(navigate)
  }, [])

  return (
    <h1>Logging out...</h1>
  )
}

export default Logout;
