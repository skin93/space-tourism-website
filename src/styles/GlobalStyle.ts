import styled, { createGlobalStyle, css } from "styled-components";

export const theme = {
  colors: {
    light: "#FFF",
    dark: "#0B0D17",
    accent: "#D0D6F9",
    border: "#979797",
  },
  fontFamily: {
    bellefair: "'Bellefair', serif",
    barlow: "'Barlow', sans-serif;",
    barlowCondensed: "'Barlow Condensed', sans-serif",
  },
  bellefairLight: css`
    font-family: "Bellefair", serif;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
  `,
  bellefairDark: css`
    font-family: "Bellefair", serif;
    color: #0b0d17;
    text-transform: uppercase;
    font-weight: 400;
  `,
  barlowLight: css`
    font-family: "Barlow", sans-serif;
    color: #fff;
  `,
  barlowCondesedLight: css`
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    color: #fff;
  `,
};

export const H1 = styled.h1`
  ${theme.bellefairLight}
  letter-spacing: 0;
  font-size: 80px;
  text-align: center;
  margin-block: 1rem;

  @media (min-width: 768px) {
    font-size: 150px;
    margin-block: 24px;
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
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
  }
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
  ${theme.barlowCondesedLight};
  color: ${theme.colors.accent};
  font-size: 14px;
  letter-spacing: 2.35px;
`;

export const Text = styled.p`
  ${theme.barlowLight};
  color: ${theme.colors.accent};
  font-size: 1.125rem;
  line-height: 2;
  letter-spacing: 0;
`;

export const BodyText = styled.p`
  ${theme.barlowLight}
  color: ${(props) => props.theme.colors.accent};
  font-size: 15px;
  line-height: 2;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const InteractiveElement = styled.div`
  text-align: center;
  ${theme.barlowCondesedLight}
  letter-spacing: 2.7px;
  & span {
    color: ${theme.colors.light};
    opacity: 25%;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media (min-width: 1440px) {
    margin-left: 9vw;
    font-size: 28px;
    letter-spacing: 4.72px;
  }
`;

export const Divider = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: ${theme.colors.light};
  opacity: 25.15%;
`;

export const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  padding-inline: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding-inline: 39px;
  }

  @media (min-width: 1440px) {
    padding-inline: 39px;
  }
`;

export const Section = styled.section`
  height: 100vh;
  padding-top: 88px;

  @media (min-width: 768px) {
    padding-top: 136px;
  }

  @media (min-width: 1440px) {
    padding-top: 212px;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background: #0B0D17
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
