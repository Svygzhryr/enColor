import styled from 'styled-components'

export const Container = styled.section`
  margin: 50px auto;
  padding: 20px;

  color: ${(props) => props.theme.colors.l1};
  font-size: 24px;
  text-align: center;

  border-radius: 20px;
`

export const Title = styled.h1`
  width: 360px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-content: center;

  font-family: 'Outfit', sans-serif;
  font-size: 36px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d2};
`
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  width: 80dvw;
  margin: 50px auto 0;
`

export const GridItem = styled.li`
  padding: 20px;

  font-family: 'Outfit', sans-serif;

  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d2};
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
