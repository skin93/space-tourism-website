import styled from 'styled-components';

export const Hero = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const ButtonWrapper = styled.div`
//   width: 150px;
//   height: 150px;
//   margin: calc(100vh / 8.23) auto 0;

//   @media (min-width: 760px) {
//     width: 242px;
//     height: 242px;
//   }

//   @media (min-width: 1440px) {
//     width: 274px;
//     height: 274px;
//   }
// `;

export const ExploreButton = styled.button`
  position: relative;
  width: 150px;
  height: 150px;
  margin: calc(100vh / 8.23) auto 0;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fontFamily.bellefair};
  cursor: pointer;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      width: 242px;
      height: 242px;
      border-radius: 50%;
      background-color: #979797;
      opacity: 10.36%;
    }
  }

  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
    letter-spacing: 2px;
    font-size: 32px;

    &:hover {
      &::before {
        width: 450px;
        height: 450px;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 274px;
    height: 274px;

    &:hover {
      &::before {
        width: 509px;
        height: 509px;
      }
    }
  }
`;
