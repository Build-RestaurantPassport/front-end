import styled from 'styled-components';
import '../../Styles/styleVars';

const ImgGroup= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;

  img#logo{
    margin: 8%;
  }

  #logo{
    width: 50%;
  }
`;

export {ImgGroup};