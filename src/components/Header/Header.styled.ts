import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
`;

export const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const HamburgerWrapper = styled.div`
  width: 24px;
  height: 21px;
`;

export const Hamburger = styled.img`
  width: 100%;
  height: 100%;
`;

export const Line = styled.div`
  display: none;
  /* position: absolute;
  left: calc(100vw / 8.62);
  z-index: 100;
  width: calc(100vw / 3.04);
  height: 1px;
  background: #fff;
  opacity: 25.15%; */
`;
