import styled from 'styled-components'

export const SwitchButton = styled.button`
  height: 50px;
  width: 50px;
  position: fixed;
  top: 10px;
  right: 10px;

  color: ${(props) => props.theme.colors.l1};

  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.d2};

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.d3};
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    color: white;
  }
`
