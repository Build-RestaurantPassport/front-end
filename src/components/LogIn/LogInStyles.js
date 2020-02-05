import styled from 'styled-components';
import {fontStyles, btnStyles, formStyles} from '../../Styles/styleVars';
import '../../Styles/globalStyles';

const LogInCont= styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    .errorCont{
      width: 100%;
      margin: 0 0 5% 0;
    }

    label{
      font-size: ${fontStyles.pSize};
    }

    input{
      font-size: ${fontStyles.pSize};
      padding: 5px;
      background-color: ${formStyles.bgColor};
      width: 100%;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 1px solid #aaa;
      color: ${fontStyles.pColor};
    }

  }
`;

const FormHeader= styled.div`
  display: flex;
  justify-content; center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0 0 5% 0;

  span{
    position: absolute;
    left: 25px;
    top: 50px;

    img{
      width: 100%;
    }
  }
`;

const SubmitButton= styled.button`
  font-size: ${fontStyles.smallPSize};
  padding: 0.5rem;
  margin: 5% 0;
  width: 100%;
  background-color: ${btnStyles.bgColor};
  border-radius: 50px;
`;

export {FormHeader, LogInCont, SubmitButton};