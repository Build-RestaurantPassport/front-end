import styled from 'styled-components';
import {fontStyles} from '../../../Styles/styleVars';

const RestCard= styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  max-width: 100%;
  width: 98%;
  margin: 3% auto 0 auto;
  padding: 2%;
  line-height: 1.2;
`;

const RestInfo= styled.div`
  margin: 0;
  width: 60%;
  text-align: center;
`;

const RatingDisp= styled.div`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: ${fontStyles.smallPSize};
`;

export {
  RestCard,
  RestInfo,
  RatingDisp
};