import {
  Hamburger,
  HamburgerWrapper,
  Line,
  Logo,
  LogoWrapper,
  StyledHeader,
} from './Header.styled';
import logo from 'assets/shared/logo.svg';
import { StyledNavbar } from 'components/Navbar/Navbar.styled';
import hamburger from 'assets/shared/icon-hamburger.svg';

export default function Header() {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo src={logo} alt='Logo' />
      </LogoWrapper>
      <HamburgerWrapper>
        <Hamburger src={hamburger} alt='Hamburger icon' />
      </HamburgerWrapper>
      <Line />
      <StyledNavbar />
    </StyledHeader>
  );
}
