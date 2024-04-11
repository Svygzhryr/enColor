import styled from 'styled-components'

export const Container = styled.section`
  margin: 50px auto;

  color: ${(props) => props.theme.colors.l1};
  font-size: 24px;
  text-align: center;

  border-radius: 20px;
`

export const Title = styled.h1`
  min-width: 260px;
  width: calc(80dvw / 3 - 40px);
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;

  font-family: 'Outfit', sans-serif;
  font-size: 26px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d2};
`
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 120px);
  justify-content: center;
  gap: 20px;
  width: 80dvw;
  margin: 50px auto 0;
`

export const GridItemDesc = styled.div`
  display: flex;
  opacity: 0;
  padding: 10px;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);

  font-size: 20px;

  border-radius: 20px;
  background-color: #15152299;

  z-index: 1;

  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(15px);
`

export const GridItem = styled.li`
  position: relative;
  min-width: 280px;
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
  font-weight: 700;
  color: ${(props) => props.theme.colors[props.$type || 'm1']};
`
