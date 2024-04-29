import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 300px;
  padding: 20px;

  text-align: center;
  font-family: 'Outfit', sans-serif;

  background-color: ${(props) => props.theme.colors.d2};
  border-radius: 20px;
  transform: translate(-50%, -50%);

  h1 {
  }

  p {
    margin: 10px 0;
    font-size: 24px;
    overflow: auto;
  }
`
