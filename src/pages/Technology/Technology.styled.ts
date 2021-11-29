import styled from 'styled-components';
import { BodyText, H3, H4, Section, Wrapper } from 'styles/GlobalStyle';
import TechnologyMobile from 'assets/technology/background-technology-mobile.jpg';
import TechnologyTablet from 'assets/technology/background-technology-tablet.jpg';
import TechnologyDesktop from 'assets/technology/background-technology-desktop.jpg';

export const TechnologyWrapper = styled(Wrapper)`
  background-image: url(${TechnologyMobile});

  @media (min-width: 768px) {
    background-image: url(${TechnologyTablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${TechnologyDesktop});
  }
`;

export const TechnologySection = styled(Section)``;

export const Container = styled.div``;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 170px;
  margin-block: 2rem;
`;

type ImgProps = {
  src: {
    portrait: string;
    landscape: string;
  };
};

export const Img = styled.div<ImgProps>`
  height: 100%;
  margin-inline: auto;
  background: url(${(props) => props.src.landscape});
  background-repeat: none;
  background-position: center;
  background-size: cover;
`;

export const Navigation = styled.ul`
  display: block;
`;

export const NavigationElement = styled.li`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.border};
  margin-inline: 10px;

  &.active {
    background-color: ${(props) => props.theme.colors.light};
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Introduction = styled.div`
  margin-block: 2rem 1rem;
`;

export const Name = styled(H3)``;

export const Description = styled(BodyText)``;
