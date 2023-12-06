import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        // style={({ isActive }) =>
        //   isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        // }
        to="."
        end>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="/courses">
        Courses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="/about">
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="/contacts">
        Contacts
      </NavLink>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link> */}
    </nav>
  );
};

export default Menu;
