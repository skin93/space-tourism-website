import styled from "styled-components";
import { BodyText, Divider, H2, Section, Wrapper } from "styles/GlobalStyle";
import DestinationMobile from "assets/destination/background-destination-mobile.jpg";
import DestinationTablet from "assets/destination/background-destination-tablet.jpg";
import DestinationDesktop from "assets/destination/background-destination-desktop.jpg";

export const DestinationWrapper = styled(Wrapper)`
  background-image: url(${DestinationMobile});

  @media (min-width: 768px) {
    background-image: url(${DestinationTablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${DestinationDesktop});
  }
`;

export const DestinationSection = styled(Section)`
  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 75vw;
    margin-inline: auto;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    width: 73vw;
    height: 53vh;
    margin-right: 8vw;
    margin-top: 64px;
  }
`;

export const Img = styled.img`
  width: 170px;
  height: 170px;
  margin-block: 32px 26px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-block: 60px 53px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 445px;
    margin-block: 33px 0;
  }
`;

export const Destinations = styled.ul`
  display: block;

  @media (min-width: 1440px) {
    width: 444px;
    text-align: left;
  }
`;

export const DestinationElement = styled.li`
  cursor: pointer;
  display: inline-block;
  position: relative;
  ${(props) => props.theme.barlowCondesedLight};
  color: ${(props) => props.theme.colors.accent};
  font-size: 14px;
  letter-spacing: 2.36px;
  margin-inline: 10px;

  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 2.7px;
  }

  &.active {
    color: ${(props) => props.theme.colors.light};
    &:after {
      content: "";
      top: 24px;
      left: 0;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${(props) => props.theme.colors.light};
    }
  }
`;

export const Name = styled(H2)`
  margin-block: 20px 1px;
  @media (min-width: 768px) {
    margin-block: 32px 8px;
  }
`;

export const Description = styled(BodyText)`
  width: 100%;

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const StyledDivider = styled(Divider)`
  margin-top: 24px;
  background-color: ${(props) => props.theme.colors.border};
  @media (min-width: 768px) {
    width: 573px;
    margin-inline: auto;
  }

  @media (min-width: 1440px) {
    width: 444px;
    margin-inline: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  height: 19vh;
  margin-top: 32px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    height: 9vh;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const AvgDist = styled.div`
  @media (min-width: 768px) {
    & > p {
      margin-bottom: 12px;
    }
  }
`;

export const EstTime = styled(AvgDist)``;
