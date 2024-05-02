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
      <Link to="/locations">Locations</Link>
      &nbsp; | &nbsp;
      <Link to="/locations/add">Add Location</Link>
      &nbsp; | &nbsp;
      <span>Welcome {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogIn} >Log In</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} >Log Out</Link>
    </nav>
  );
}