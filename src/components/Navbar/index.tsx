import { NavLink } from 'react-router-dom';
import { MenuItem, MenuItems, StyledNavbar } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <MenuItems>
        <MenuItem>
          <NavLink to='/'>Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/destination'>Destination</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/crew'>Crew</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/technology'>Technology</NavLink>
        </MenuItem>
      </MenuItems>
    </StyledNavbar>
  );
}
