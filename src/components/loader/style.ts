import styled, { keyframes } from 'styled-components'

const anim = keyframes`
  from {
    transform: rotate(0deg)
  } 
  to {
    transform: rotate(360deg)
  }
`

export const LoaderWrapper = styled.section`
  width: 40px;
  height: 40px;
  margin: 200px auto;

  border: 22px dotted ${(props) => props.theme.colors.l1};
  border-radius: 50%;
  /* background-color: ${(props) => props.theme.colors.d3}; */

  animation: ${anim} 2s linear infinite;
`

export const LoaderElement = styled.div``
