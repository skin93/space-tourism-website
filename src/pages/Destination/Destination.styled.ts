import styled from 'styled-components';
import { BodyText, Divider, H2, Wrapper } from 'styles/GlobalStyle';
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

export const Img = styled.img`
  width: 170px;
  height: 170px;
  margin-block: 51px;
`;

export const Destinations = styled.ul`
  display: block;
`;

export const DestinationElement = styled.li`
  display: inline-block;
  position: relative;
  ${(props) => props.theme.barlowCondesedLight};
  color: ${(props) => props.theme.colors.accent};
  font-size: 14px;
  letter-spacing: 2.36px;
  margin-inline: 10px;

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
`;

export const StyledDivider = styled(Divider)`
  margin-top: 24px;
`;

export const AvgDist = styled.div`
  margin-top: 32px;
  & p {
    margin-top: 12px;
  }
`;

export const EstTime = styled(AvgDist)``;
