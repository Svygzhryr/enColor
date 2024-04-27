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
  padding: 20px;

  color: ${(props) => props.theme.colors.l1};
  font-family: 'Outfit', sans-serif;

  border-radius: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.d2};

  transition: all 0.2s ease-in-out;

  div {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.d3};
    transform: translateX(-20px);

    img {
    }
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
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  p {
    margin-top: 20px;

    &:last-child {
    }
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    object-position: 50% 0;

    transition: all 0.2s ease-in-out;
  }
`
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-right: 20px;
`
export const NewsImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  position: absolute;
`
