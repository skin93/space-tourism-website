import styled from 'styled-components';
import { BodyText, H3, H4, Section, Wrapper } from 'styles/GlobalStyle';
import CrewMobile from 'assets/crew/background-crew-mobile.jpg';
import CrewTablet from 'assets/crew/background-crew-tablet.jpg';
import CrewDesktop from 'assets/crew/background-crew-desktop.jpg';

export const CrewWrapper = styled(Wrapper)`
  background-image: url(${CrewMobile});

  @media (min-width: 768px) {
    background-image: url(${CrewTablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${CrewDesktop});
  }
`;

export const CrewSection = styled(Section)`
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
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 592px;
    margin-inline: auto;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  margin-block: 2rem;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.25);

  @media (min-width: 768px) {
    position: absolute;
    order: 3;
    border: none;
    margin-block: 0;
    bottom: 0;
    right: 0;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export const Img = styled.img`
  height: 223px;
  margin-inline: auto;

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1440px) {
    height: 660px;
  }
`;

export const Crews = styled.ul`
  display: block;
  order: 1;

  @media (min-width: 768px) {
    order: 3;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    text-align: left;
    position: absolute;
    bottom: 96px;
  }
`;

export const CrewElement = styled.li`
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

  @media (min-width: 1440px) {
    width: 15px;
    height: 15px;
  }
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 100%;
    margin-inline: auto;
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    width: 50%;
    margin-left: 0;
    margin-top: 154px;
    margin-left: 166px;
    text-align: left;
  }
`;

export const Introduction = styled.div`
  order: 2;
  margin-block: 2rem 1rem;

  @media (min-width: 768px) {
    order: 1;
    margin-block: 0 1rem;
  }
`;

export const Role = styled(H4)`
  opacity: 49.51%;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    opacity: 49.91%;
  }

  @media (min-width: 1440px) {
    opacity: 50.24%;
  }
`;

export const Name = styled(H3)``;

export const Bio = styled(BodyText)`
  order: 3;
  @media (min-width: 768px) {
    order: 2;
    margin-inline: auto;
  }

  @media (min-width: 1440px) {
    text-align: left;
    width: 65%;
    margin-inline: 0 auto;
  }
`;
