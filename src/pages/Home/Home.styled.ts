import styled from "styled-components";
import HomeMobile from "assets/home/background-home-mobile.jpg";
import HomeTablet from "assets/home/background-home-tablet.jpg";
import HomeDesktop from "assets/home/background-home-desktop.jpg";
import { Section, Wrapper } from "styles/GlobalStyle";
import { Link } from "react-router-dom";

export const HomeWrapper = styled(Wrapper)`
  background-image: url(${HomeMobile});

  @media (min-width: 768px) {
    background-image: url(${HomeTablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${HomeDesktop});
  }
`;

export const HomeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 93vh;

  @media (min-width: 1440px) {
    & * {
      text-align: left;
    }

    display: flex;
    flex-direction: row;
  }
`;

export const Hero = styled.div`
  width: 327px;
  margin-inline: auto;

  @media (min-width: 768px) {
    width: 450px;
  }

  @media (min-width: 1440px) {
    margin-inline: 0;
  }
`;

export const ExploreButton = styled(Link)`
  position: relative;
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fontFamily.bellefair};
  cursor: pointer;

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 242px;
      height: 242px;
      border-radius: 50%;
      background-color: #979797;
      opacity: 10.36%;
    }
  }

  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
    letter-spacing: 2px;
    font-size: 32px;

    &:hover {
      &::before {
        width: 450px;
        height: 450px;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 274px;
    height: 274px;
    margin-top: 5%;
    margin-right: 10%;

    &:hover {
      &::before {
        width: 509px;
        height: 509px;
      }
    }
  }
`;
