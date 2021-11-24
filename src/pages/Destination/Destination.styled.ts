import styled from 'styled-components';
import { BodyText, Divider, H2, Section, Wrapper } from 'styles/GlobalStyle';
import DestinationMobile from 'assets/destination/background-destination-mobile.jpg';
import DestinationTablet from 'assets/destination/background-destination-tablet.jpg';
import DestinationDesktop from 'assets/destination/background-destination-desktop.jpg';

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
    padding-top: 136px;
    padding-bottom: 62px;
  }

  @media (min-width: 1440px) {
    padding-top: 212px;
    padding-bottom: 118px;
  }
`;

export const Container = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 157px;
    width: 1047px;
    height: 478px;
    margin-inline: auto;
    margin-top: 100px;
  }
`;

export const Img = styled.img`
  width: 170px;
  height: 170px;
  margin-block: 51px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    height: 445px;
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
      content: '';
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
  margin-top: 24px;
`;

export const Description = styled(BodyText)`
  margin-top: 1px;
  font-size: 15px;
  line-height: 2.5;
  @media (min-width: 768px) {
    margin-inline: auto;
    width: 573px;
    font-size: 16px;
    letter-spacing: 2.8;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: 3.2;
    text-align: left;
    width: 444px;
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
  @media (min-width: 768px) {
    display: flex;
    gap: 100px;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const AvgDist = styled.div`
  margin-top: 32px;
  & p {
    margin-top: 12px;
  }
`;

export const EstTime = styled(AvgDist)``;
