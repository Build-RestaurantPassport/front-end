import styled from 'styled-components';
import {theme} from '../../Styles/styleVars';

const HeaderCont= styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  position: relative;

  @media only screen and (min-width: 575px){
    justify-content: space-evenly;
    padding: 1% 0 0 0;
  } 
`;

const ProfileBgImg= styled.img`
  width: 100%;

  @media only screen and (min-width: 575px){
    width: auto;
    height: 100%;
  } 
`;
const ProfileBgImg2= styled.img`
  width: auto;
  height: 100%;
  display: none;

  @media only screen and (min-width: 575px){
   display: block;
  } 
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
  background-color: red;
  border-radius: 50%;
  border: 1px solid #eee;
  position: absolute;
  left: ${
    window.innerWidth - '50%'
  };
  bottom: -20%;

  @media only screen and (min-width: 430px){
    bottom: -20%;
  }
  @media only screen and (min-width: 480px){
    bottom: -15%;
  }
`;

const ProfileLogoImg= styled.img`
  width: 65%;
`;

export {
  ProfileLogoImg, 
  ProfileLogoImgCont, 
  HeaderCont,
  ArrowImg,
  ProfileBgImg,
  ProfileBgImg2
};