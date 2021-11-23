import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    justify-content: center;
    margin-left: auto;
    width: 450px;
    height: 96px;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
  }

  @media (min-width: 1440px) {
    width: 830px;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const MenuItem = styled.li`
  ${(props) => props.theme.barlowCondesedLight}
  position: relative;
  margin-inline: 20px;

  & span {
    font-weight: bold;
  }

  & > a {
    letter-spacing: 2.36px;
    font-size: 14px;

    &.active {
      &:after {
        content: '';
        top: 54px;
        left: 0;
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #fff;
      }
    }
  }
`;
