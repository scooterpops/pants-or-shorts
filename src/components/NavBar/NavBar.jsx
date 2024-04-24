import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }
  function handleLogIn() {
    userService.logIn()
    setUser(user)
  }


  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Welcome {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogIn} >Log In</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} >Log Out</Link>
    </nav>
  );
}