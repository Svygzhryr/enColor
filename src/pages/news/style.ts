import styled from 'styled-components'

export const NewsWrapper = styled.div`
  position: relative;
  width: 60%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  flex-direction: column;
  gap: 20px;
`

export const NewsItem = styled.a`
  display: flex;
  width: 100%;

  transition: all 0.2s ease-in-out;

  img {
    position: absolute;
    width: 80%;
    height: 200px;
    z-index: 0;
    opacity: 0.4;
    border-radius: 0 20px 20px 0;
  }

  div {
    transition: all 0.2s ease-in-out;
  }

  &:hover div {
    background-color: ${(props) => props.theme.colors.d3};
  }

  &:hover {
    transform: translateX(-20px);
  }
`

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;

  font-size: 24px;

  border-bottom: 1px solid ${(props) => props.theme.colors.l1};

  h2 {
    width: 70%;
    padding-right: 10px;
  }

  h3 {
    width: 30%;

    color: ${(props) => props.theme.colors.m1};
    text-align: right;
    font-size: 20px;
    overflow-wrap: break-word;
  }
`

export const NewsInfo = styled.div`
  padding: 20px;

  color: ${(props) => props.theme.colors.l1};
  font-family: 'Outfit', sans-serif;

  border-radius: 20px 0 0 20px;
  min-height: 200px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.d2};

  p {
    margin-top: 20px;
  }
`
