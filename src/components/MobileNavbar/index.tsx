import { Link } from 'react-router-dom';
import { MobileNav, MobileMenu, MenuItem } from './MobileMenu.styled';

export type MobileNavbarProps = {
  open: boolean;
};

export default function MobileNavbar({ open }: MobileNavbarProps) {
  return (
    <MobileNav open={open}>
      <MobileMenu>
        <MenuItem>
          <Link to='/'>
            <span>00</span> Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/destination'>
            <span>01</span> Destination
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/crew'>
            <span>02</span> Crew
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/technology'>
            <span>03</span> Technology
          </Link>
        </MenuItem>
      </MobileMenu>
    </MobileNav>
  );
}
