// **************** DEFAULT STYLED COMPONENTS **************** //
// ********************************************************** //
// ************* vars used form styleVars.js *************** //
import styled, {createGlobalStyle} from 'styled-components';
import {fontStyles, theme} from './styleVars';

const GlobalStyle= createGlobalStyle`
  *, *::before, *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a{
    width: 100%;
    text-align: center;
    text-decoration: none;
  }

  body{
    font-size: 62.5%; 
    // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    // 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    // sans-serif;
    font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

// **************** CONTAINER **************** //
  const AppCont= styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    min-height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.white};
  `;

// **************** HEADING 1-5 **************** //

const Heading1= styled.h1`
  color: ${ props=>  props.color || fontStyles.h1Color };
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h1Size};
  margin: 25px auto 5px auto;
  text-align: center;
`;

const Heading2= styled.h2`
  color: ${props => props.color || fontStyles.h2Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h2Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading3= styled.h3`
  color: ${props => props.color || fontStyles.h3Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h3Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading4= styled.h4`
  color: ${props => props.color || fontStyles.h4Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h4Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

const Heading5= styled.h5`
  color: ${props => props.color || fontStyles.h5Color};
  background-color: ${ props => props.backgroundColor };
  font-size: ${props => props.fontSize || fontStyles.h5Size};
  margin: 5px auto 5px auto;
  text-align: center;
`;

// ******** PARAGRAPH AND LINK(a) TAG ********** //

const Para= styled.p`
  color: ${props => props.color || fontStyles.pColor};
  font-size: ${props => props.fontSize || fontStyles.pSize};
  margin: 5px;
`;

const SmallPara= styled.p`
  color: ${props => props.color || fontStyles.pColor};
  font-size: ${props => props.fontSize || fontStyles.smallPSize};
  margin: 5px;
`;

const ExtraSmallPara= styled.p`
  color: ${props => props.color || fontStyles.pColor};
  font-size: ${props => props.fontSize || fontStyles.extraSmallPSize};
  margin: 5px;
`;

const Anchor= styled.span`
  color: ${props => props.color || fontStyles.linkColor};
  font-size: ${props => props.fontSize || fontStyles.linkSize};
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: gray;
  
  a{
    color: blue;
  }
  
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export {
  GlobalStyle,
  Heading1, 
  Heading2, 
  Heading3,
  Heading4,
  Heading5,
  Para,
  SmallPara,
  ExtraSmallPara,
  Anchor,
  AppCont
};