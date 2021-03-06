import styled, { createGlobalStyle } from 'styled-components';
// @import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');

export default createGlobalStyle`
  :root {
    --primaryColor: rgb(132, 248, 221);
    --secondaryColor: rgb(90, 207, 180);
    --mainWhite: #fff;
    --offWhite: #f7f7f7;
    --mainGrey: #e7e7e7;
    --lightGrey: #858585;
    --mediumGrey: #616161;
    --darkGrey: #282828;
    --mainTransition: all 0.3s linear;
    --mainSpacing: 2px;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5%;

    /* Scrollbar styles */
    &::-webkit-scrollbar {
      width: .7rem;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: var(--darkGrey);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-image: linear-gradient(to bottom, var(--primaryColor) 60%, #242424);
      outline: 1px solid var(--lightGrey);
    }
  }

  html,
  body {
    width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-bottom: 1.25rem;
    font-size: 2.8rem;
    letter-spacing: var(--mainSpacing);
    color: var(--darkGrey);
  }

  p {
    margin-bottom: 1.25rem;
    font-family: 'Proza Libre', sans-serif;
    color: var(--darkGrey);
    font-size: 1.5rem;
    line-height: 25px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 13rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
  grid-template-rows: auto 90vh repeat(2, min-content) 60vh 10rem;

  @media screen and (max-width: 769px) {
    grid-template-rows: auto minmax(90vh, auto) repeat(2, min-content) 60vh 16rem;
  }

  @media screen and (max-width: 575px) {
    grid-template-rows: auto minmax(90vh, auto) repeat(2, min-content) 70vh 14rem;
  }
`;
