import { useState } from 'react';
import {
  HeaderWrapper,
  Icon,
  IconWrapper,
  Line,
  Logo,
  LogoWrapper,
  StyledHeader,
} from './Header.styled';
import logo from 'assets/shared/logo.svg';
import hamburger from 'assets/shared/icon-hamburger.svg';
import iconClose from 'assets/shared/icon-close.svg';
import Navbar from 'components/Navbar';
import MobileNavbar from 'components/MobileNavbar';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <HeaderWrapper>
      <StyledHeader>
        <LogoWrapper>
          <Logo src={logo} alt='Logo' />
        </LogoWrapper>
        <IconWrapper>
          <Icon
            src={open ? iconClose : hamburger}
            alt='Icon'
            onClick={() => setOpen(!open)}
          />
        </IconWrapper>
        {/* <Line /> */}
        <Navbar />
        <MobileNavbar open={open} />
      </StyledHeader>
    </HeaderWrapper>
  );
}
