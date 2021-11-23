import { Link } from 'react-router-dom';
import { MobileNav, MobileMenu, MobileMenuItem } from './MobileMenu.styled';

export type MobileNavbarProps = {
  open: boolean;
};

export default function MobileNavbar({ open }: MobileNavbarProps) {
  return (
    <MobileNav open={open}>
      <MobileMenu>
        <MobileMenuItem>
          <Link to='/'>
            <span>00</span> Home
          </Link>
        </MobileMenuItem>
        <MobileMenuItem>
          <Link to='/destination'>
            <span>01</span> Destination
          </Link>
        </MobileMenuItem>
        <MobileMenuItem>
          <Link to='/crew'>
            <span>02</span> Crew
          </Link>
        </MobileMenuItem>
        <MobileMenuItem>
          <Link to='/technology'>
            <span>03</span> Technology
          </Link>
        </MobileMenuItem>
      </MobileMenu>
    </MobileNav>
  );
}
