import styled, { createGlobalStyle, css } from 'styled-components';
import HomeMobile from 'assets/home/background-home-mobile.jpg';
import HomeTablet from 'assets/home/background-home-tablet.jpg';
import HomeDesktop from 'assets/home/background-home-desktop.jpg';

export const theme = {
  colors: {
    light: '#FFF',
    dark: '#0B0D17',
    accent: '#D0D6F9',
  },
  fontFamily: {
    bellefair: "'Bellefair', serif",
    barlow: "'Barlow', sans-serif;",
    barlowCondensed: "'Barlow Condensed', sans-serif",
  },
  bellefairLight: css`
    font-family: 'Bellefair', serif;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
  `,
  barlowLight: css`
    font-family: 'Barlow', sans-serif;
    color: #fff;
  `,
  barlowCondesedLight: css`
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    color: #fff;
  `,
};

export const H1 = styled.h1`
  ${theme.bellefairLight}
  letter-spacing: 0;
  font-size: 80px;
  line-height: 1.7;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 150px;
  }

  @media (min-width: 1440px) {
    line-height: auto;
  }
`;

export const H2 = styled.h2`
  ${theme.bellefairLight}
  font-size: 56px;

  @media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
  }
`;

export const H3 = styled.h3`
  ${theme.bellefairLight}
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1440px) {
    font-size: 56px;
  }
`;

export const H4 = styled.h4`
  ${theme.bellefairLight}
  font-size: 32px;
`;

export const H5 = styled.h5`
  ${theme.barlowCondesedLight}
  color: ${theme.colors.accent};
  text-align: center;

  font-weight: 400;
  font-size: 16px;
  letter-spacing: 2.7px;

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media (min-width: 1440px) {
    font-size: 28px;
    letter-spacing: 4.75px;
  }
`;

export const SubHead1 = styled.p`
  ${theme.bellefairLight}
  font-size: 28px;
`;

export const SubHead2 = styled.p`
  ${theme.barlowCondesedLight}
  font-size: 14px;
  letter-spacing: 2.35px;
`;

export const Main = styled.main`
  margin-top: 46px;
  padding-inline: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height: 100vh; */
  /* min-height: 100vh; */
`;

export const Text = styled.p`
  ${theme.barlowLight}
  color: ${theme.colors.accent};
  font-size: 1.125rem;
  line-height: 2;
  letter-spacing: 0;
`;

export const BodyText = styled.p`
  ${theme.barlowLight}
  color: ${(props) => props.theme.colors.accent};
  line-height: 2;
  font-size: 15px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 32;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

  width: 100%;
  min-height: 100vh;
  background-image: url(${HomeMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px){
    background-image: url(${HomeTablet});
  }

  @media (min-width: 1440px){
    background-image: url(${HomeDesktop});
  }
}

a {
  ${theme.barlowCondesedLight};
  font-size: 1rem;
  letter-spacing: 2.7px;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;
