import styled from 'styled-components';
import {fontStyles} from '../../../../Styles/styleVars';

const SpinnerCont= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    font-size: ${fontStyles.smallPSize}
  }
`;

const Spinner= styled.img`
  width: 20%;
`;

export {Spinner, SpinnerCont};