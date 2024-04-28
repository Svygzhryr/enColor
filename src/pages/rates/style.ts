import styled from 'styled-components'

export const RatesWrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1100px) {
    height: 100dvh;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0 auto;
    width: 20%;
    height: 100%;

    background-color: transparent;
    border: none;

    @media (max-width: 1100px) {
      bottom: 0;
      height: 200px;
      width: 50%;
    }

    cursor: pointer;

    div {
      /* -webkit-box-shadow: inset 0px 0px 19px 14px transparent;
      -moz-box-shadow: inset 0px 0px 19px 14px transparent;
      box-shadow: inset 0px 0px 19px 14px transparent; */
      border: 50px solid transparent;
      border-right: 50px solid ${(props) => props.theme.colors.d3};

      transition: all 0.2s ease-in-out;
    }

    &:last-child {
      div {
        border: 50px solid transparent;
        border-left: 50px solid ${(props) => props.theme.colors.d3};
      }
    }

    &:hover div {
      /* -webkit-box-shadow: inset 0px 0px 19px 14px rgba(128, 128, 245, 0.82);
      -moz-box-shadow: inset 0px 0px 19px 14px rgba(128, 128, 245, 0.82);
      box-shadow: inset 0px 0px 19px 14px rgba(128, 128, 245, 0.82); */
      border-right: 50px solid ${(props) => props.theme.colors.m2};
    }

    &:hover:last-child {
      div {
        border: 50px solid transparent;

        border-left: 50px solid ${(props) => props.theme.colors.m2};
      }
    }

    &:active div {
      transform: scale(1.3);

      transition: none;
    }

    &:disabled {
      pointer-events: none;
      cursor: none;

      div {
        opacity: 0;
      }
    }
  }
`

export const Container = styled.div`
  width: 70dvw;
  max-width: 1600px;
  margin: 50px auto;

  @media (max-width: 1100px) {
    width: 90vw;
  }
`

export const CoinWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px auto;
  width: 100%;
  height: 50px;

  color: ${(props) => props.theme.colors.l1};
  font-size: 28px;

  &:first-child {
    margin: 0;
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 5px;

    font-family: 'Outfit', sans-serif;

    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.d2};
  }

  @media (max-width: 1500px) {
    font-size: 24px;
  }

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 630px) {
    font-size: 14px;
  }

  @media (max-width: 430px) {
    font-size: 12px;
  }
`

export const CoinNumber = styled.h2`
  width: 6%;
`

export const CoinSymbol = styled.h2`
  width: 15%;
`

export const CoinName = styled.h2`
  width: 20%;
`

export const CoinPrice = styled.h2`
  width: 20%;
  color: ${(props) => props.theme.colors.m1};
`

export const CoinChangeDay = styled.h2<{ $type: boolean }>`
  width: 10%;

  color: ${(props) =>
    props.$type ? props.theme.colors.fall : props.theme.colors.rise};
`

export const ButtonPrev = styled.button`
  left: 0;
`

export const ButtonNext = styled.button`
  right: 0;
`
