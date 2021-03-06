import styled from "styled-components";
import { MobileNavbarProps } from ".";

export const MobileNav = styled.nav<MobileNavbarProps>`
  position: absolute;
  z-index: 100;
  top: -24px;
  right: 0;
  min-height: 100vh;
  width: 68%;
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 70px;
`;

export const MobileMenuItem = styled.li`
  ${(props) => props.theme.barlowCondesedLight}
  & > a {
    letter-spacing: 2.7px;
  }
  margin-block: 20px;
  & span {
    font-weight: 600;
  }
`;
