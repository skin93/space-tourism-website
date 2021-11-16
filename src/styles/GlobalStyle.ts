import styled, { createGlobalStyle } from 'styled-components';
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
};

const BellafirLight = styled.p`
  font-family: ${theme.fontFamily.bellefair};
  color: ${theme.colors.light};
  text-transform: uppercase;
`;

const BarlowCondensedLight = styled.p`
  font-family: ${(props) => props.theme.fontFamily.barlowCondensed};
  color: ${theme.colors.light};
  text-transform: uppercase;
`;

const BarlowLight = styled.p`
  font-family: ${(props) => props.theme.fontFamily.barlow};
  color: ${theme.colors.light};
`;

export const H1 = styled(BellafirLight)`
  font-size: 150px;
  margin: 24px 0;
  letter-spacing: 0;
`;

export const H2 = styled(BellafirLight)`
  font-size: 100px;
`;

export const H3 = styled(BellafirLight)`
  font-size: 56px;
`;

export const H4 = styled(BellafirLight)`
  font-size: 32px;
`;

export const H5 = styled(BarlowCondensedLight)`
  font-size: 28px;
  letter-spacing: 4.75px;
  color: ${theme.colors.accent};
`;

export const SubHead1 = styled(BellafirLight)`
  font-size: 28px;
`;

export const SubHead2 = styled(BarlowCondensedLight)`
  font-size: 14px;
  letter-spacing: 2.35;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-image: url(${HomeDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

// export const Heading = styled.h2`
//   color: ${theme.colors.accent};
//   font-size: 1.75rem;
//   font-family: ${theme.fontFamily.barlowCondensed};
//   font-weight: 200;
//   text-transform: uppercase;
//   letter-spacing: 4.72px;
// `;

export const Text = styled.p`
  color: ${theme.colors.accent};
  font-family: ${theme.fontFamily.barlow};
  font-size: 1.125rem;
  line-height: 2;
  letter-spacing: 0;
`;

export const BodyText = styled(BarlowLight)`
  line-height: 2;
`;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
  font-family: ${theme.fontFamily.barlowCondensed};
  color: ${theme.colors.light};
  font-size: 1rem;
  letter-spacing: 2.7;
  text-decoration: none;
  
}
`;
