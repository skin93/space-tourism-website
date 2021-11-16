import styled from 'styled-components';

export const Hero = styled.div`
  position: absolute;
  top: calc(100vh / 2.33);
  left: calc(100vw / 8.73);
  width: 100%;
  max-width: 450px;
  height: 100%;
  max-height: 382px;

  & > h2 {
    & > span {
      display: block;
      color: ${(props) => props.theme.colors.light};
      font-size: 9.375rem;
      font-family: ${(props) => props.theme.fontFamily.bellefair};
      text-transform: uppercase;
      margin: 24px 0;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  width: 274px;
  height: 274px;
  left: calc(100vw / 1.44);
  top: calc(100vh / 1.82);
`;

export const ExploreButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fontFamily.bellefair};
  cursor: pointer;
`;
