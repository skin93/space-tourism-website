import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  background: transparent;
  position: absolute;
  height: 40px;
  margin-top: 24px;

  @media (min-width: 768px) {
    height: 96px;
    margin-top: 0;
  }

  @media (min-width: 1440px) {
    margin-top: 45px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  background: transparent;
  height: 100%;
  margin-inline: auto;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 0;
    width: 95%;
  }

  @media (min-width: 1440px) {
    width: 96vw;
  }
`;

export const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconWrapper = styled.div`
  z-index: 101;
`;

export const Icon = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div``;
