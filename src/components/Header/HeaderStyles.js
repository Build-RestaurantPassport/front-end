import styled from 'styled-components';
import {theme} from '../../Styles/styleVars';

const HeaderCont= styled.div`
  background-color: ${theme.gray};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  position: relative;
`;

const ProfileBgImg= styled.img`
  width: 100%;
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
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto 0 auto;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  border: 1px solid #eee;
  left: 41%;
  bottom: -50%;
`;

const ProfileLogoImg= styled.img`
  width: 65%;
`;

export {
  ProfileLogoImg, 
  ProfileLogoImgCont, 
  HeaderCont,
  ArrowImg,
  ProfileBgImg
};