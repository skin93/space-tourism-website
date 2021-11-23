import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 24px;
  @media (min-width: 76px) {
    width: 48px;
    height: 48px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  margin-right: 24px;
`;

export const Icon = styled.img`
  z-index: 101;

  @media (min-width: 768px) {
    display: none;
  }
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
