import styled from 'styled-components';
import {fontStyles, btnStyles, formStyles} from '../../Styles/styleVars';
import '../../Styles/globalStyles';

const SignUpCont= styled.div`
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
      padding: 0 0 7% 0;
      height: 100%;
      position: relative;
    }

    .error{
      position: absolute;
      bottom: 0;
      left: 0;
      color: red;
      font-size: ${fontStyles.smallPSize};
    }

    label{
      font-size: ${fontStyles.smallPSize};
      color: ${fontStyles.h5Color};
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
  }
`;

const SubmitButton= styled.button`
  font-size: ${fontStyles.smallPSize};
  padding: 0.6rem;
  margin: 5% 0;
  width: 100%;
  background-color: ${btnStyles.bgColor};
  border-radius: 50px;

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`;

const BottomFormInfo= styled.span`
  font-size: ${fontStyles.extraSmallPSize};

  a{
    &:hover{
      cursor: pointer;
      opacity: 0.8;
      text-decoration: underline;
    }
`;

const FormArrowImg= styled.img`
  position: absolute;
  top: 50px;
  left: 25px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export {FormHeader, SignUpCont, SubmitButton, BottomFormInfo, FormArrowImg};