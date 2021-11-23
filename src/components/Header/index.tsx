import { useState } from 'react';
import { Icon, Line, Logo, LogoWrapper, StyledHeader } from './Header.styled';
import logo from 'assets/shared/logo.svg';
import hamburger from 'assets/shared/icon-hamburger.svg';
import iconClose from 'assets/shared/icon-close.svg';
import Navbar from 'components/Navbar';
import MobileNavbar from 'components/MobileNavbar';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo src={logo} alt='Logo' />
      </LogoWrapper>
      <Icon
        src={open ? iconClose : hamburger}
        alt='Icon'
        onClick={() => setOpen(!open)}
      />
      <Line />
      <Navbar />
      <MobileNavbar open={open} />
    </StyledHeader>
  );
}
