import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  position: absolute;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  height: 96px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 39px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 1440px) {
    margin-left: 55px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  margin-right: 24px;
  z-index: 101;
`;

export const Icon = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  display: none;
  @media (min-width: 1440px) {
    position: absolute;
    display: inline-block;
    margin-left: 300px;
    z-index: 100;
    width: 473px;
    height: 1px;
    background: #fff;
    opacity: 25.15%;
  }
`;
