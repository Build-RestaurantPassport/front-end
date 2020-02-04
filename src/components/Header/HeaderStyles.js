import styled from 'styled-components';
import {theme} from '../../Styles/styleVars';

const HeaderCont= styled.div`
  background-color: ${theme.gray};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  position: relative;
`;

const ArrowImg= styled.img`
  position: absolute;
  top: 50px;
  right: 25px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

const ProfileLogoImgCont= styled.div`
  width: 20%;
  margin: 5% auto 0 auto;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  left: 38%;
  bottom: -20%;
`;

const ProfileLogoImg= styled.img`
  width: 90%;
`;

export {
  ProfileLogoImg, 
  ProfileLogoImgCont, 
  HeaderCont,
  ArrowImg
};