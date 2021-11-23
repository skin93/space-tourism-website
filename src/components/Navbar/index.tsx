import { NavLink } from 'react-router-dom';
import { MenuItem, MenuItems, StyledNavbar } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <MenuItems>
        <MenuItem>
          <NavLink to='/'>
            <span>00</span> Home
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/destination'>
            <span>01</span> Destination
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/crew'>
            <span>02</span> Crew
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/technology'>
            <span>03</span> Technology
          </NavLink>
        </MenuItem>
      </MenuItems>
    </StyledNavbar>
  );
}
