import styled from 'styled-components'

export const Container = styled.section`
  width: 500px;
  height: 600px;
  margin: 100px auto 0;
  padding: 20px;

  color: ${(props) => props.theme.colors.l1};
  font-size: 24px;
  text-align: center;

  background-color: ${(props) => props.theme.colors.d2};
  border-radius: 20px;
`
