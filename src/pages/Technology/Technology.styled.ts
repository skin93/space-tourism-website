import styled from "styled-components";
import { BodyText, H3, SubHead2, Section, Wrapper } from "styles/GlobalStyle";
import TechnologyMobile from "assets/technology/background-technology-mobile.jpg";
import TechnologyTablet from "assets/technology/background-technology-tablet.jpg";
import TechnologyDesktop from "assets/technology/background-technology-desktop.jpg";

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

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 63vw;
    margin-inline: auto;
    padding-inline: 15px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    margin-right: 8vw;
    margin-top: 64px;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: 19vh;
  left: 0;
  width: 100vw;
  height: 24vh;

  @media (min-width: 768px) {
    height: 30vh;
  }

  @media (min-width: 1440px) {
    order: 3;
    position: relative;
    width: 515px;
    height: auto;
  }
`;

type ImgProps = {
  src: {
    portrait: string;
    landscape: string;
  };
};

export const Img = styled.div<ImgProps>`
  width: 100%;
  height: 100%;
  margin-inline: auto;
  background: url(${(props) => props.src.landscape});
  background-repeat: none;
  background-position: center;
  background-size: cover;

  @media (min-width: 1440px) {
    background: url(${(props) => props.src.portrait});
  }
`;

export const Navigation = styled.ul`
  display: block;
  order: 1;
  margin-top: 30px;

  @media (min-width: 1440px) {
    display: inline-flex;
    flex-direction: column;
    order: 1;
  }
`;

export const NavigationElement = styled.li`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.dark};
  margin-inline: 10px;

  &.active {
    background-color: ${(props) => props.theme.colors.light};
    & > span {
      ${(props) => props.theme.bellefairDark}
    }
  }

  & > span {
    ${(props) => props.theme.bellefairLight}
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;

    & > span {
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
    width: 80px;
    height: 80px;

    & > span {
      font-size: 2rem;
    }
  }
`;

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30vh;

  @media (min-width: 768px) {
    margin-top: 35vh;
  }

  @media (min-width: 1440px) {
    display: inline-flex;
    order: 2;
    margin-top: 0;
    width: 33vw;
    text-align: left;
  }
`;

export const Introduction = styled.div`
  margin-block: 2rem 1rem;
  order: 2;
`;

export const SubHead = styled(SubHead2)`
  margin-bottom: 9px;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

export const Name = styled(H3)``;

export const Description = styled(BodyText)`
  order: 3;
`;
