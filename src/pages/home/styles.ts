import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px auto 50px;
  max-width: 1000px;
  width: 70dvw;
  padding: 0 0 50px;

  color: ${(props) => props.theme.colors.l1};
  font-size: 24px;
  text-align: center;

  border-radius: 20px;

  @media (max-width: 1110px) {
    width: 90dvw;
  }
`

export const Title = styled.h1`
  min-width: 220px;
  max-width: calc(70dvw / 3 - 50px);
  margin: 50px auto 0px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;

  color: ${(props) => props.theme.colors.l1};
  font-family: 'Outfit', sans-serif;
  font-size: 26px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d2};
`
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 120px);
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 20px auto 0;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 120px);
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const GridItemDesc = styled.div`
  display: flex;
  opacity: 0;
  padding: 10px;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: calc(100% - 20px);
  height: calc(100% - 20px);

  font-size: 20px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d3t};

  z-index: 1;

  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(15px);
`

export const GridItem = styled.li`
  position: relative;
  min-width: 240px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Outfit', sans-serif;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d2};

  transition: all 0.2s ease-in-out;

  &:hover ${GridItemDesc} {
    opacity: 1;
  }

  @media (max-width: 860px) {
    &:last-child {
      grid-column: 1 / 3;
      grid-row: 5 / 6;
    }
  }
`

export const GridItemName = styled.h3`
  font-size: 20px;
  font-weight: 500;

  &::after {
    content: '';
    display: block;
    margin: 10px auto;
    width: 100px;
    border-radius: 0 0 50px 50px;
    border-bottom: 4px double ${(props) => props.theme.colors.m2};
  }
`
export const GridItemValue = styled.h2<{ $type?: string }>`
  font-size: 24px;
  color: ${(props) => props.theme.colors[props.$type || 'm1']};
`

export const Markets = styled.div`
  width: 100%;
  margin: 20px auto 0;
`

export const MarketItem = styled.a`
  display: flex;
  align-items: center;
  margin: 20px 0;

  pointer-events: none;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 20px;

    color: ${(props) => props.theme.colors.l1};
    font-family: 'Outfit', sans-serif;
    text-decoration: none;

    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.d2};

    transition: all 0.2s ease-in-out;

    @media (max-width: 400px) {
      pointer-events: all;

      &:hover,
      &:hover h2 {
        background-color: ${(props) => props.theme.colors.d3};
      }
    }
  }

  h2 {
    width: 33%;
    padding: 20px 0;
    margin: 0;

    color: ${(props) => props.theme.colors.m1};

    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.d2};

    transition: all 0.2s ease-in-out;

    &:first-child {
      width: 25%;
      color: ${(props) => props.theme.colors.l1};

      text-align: center;

      @media (max-width: 600px) {
        width: 40%;
      }
    }

    &:last-child {
      /* width: 30%; */

      color: ${(props) => props.theme.colors.l1};

      text-align: center;

      @media (max-width: 600px) {
        display: none;
      }
    }

    @media (max-width: 860px) {
      font-size: 18px;
    }

    @media (max-width: 600px) {
      width: 60%;
    }
  }

  a {
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-content: center;

    font-size: 26px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.l1};

    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.d2};

    transition: all 0.2s ease-in-out;

    pointer-events: all;

    &:hover {
      background-color: ${(props) => props.theme.colors.d3};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.m1};
    }

    img {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 400px) {
      display: none;
    }
  }

  @media (max-width: 400px) {
    display: block;
  }
`
