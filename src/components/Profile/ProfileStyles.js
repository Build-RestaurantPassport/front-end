import styled from 'styled-components';
import '../../Styles/styleVars';

const ProfileCont= styled.div`
  width: 100%;
  height: 100vh;
`;

const ProfileMid= styled.div`
  height: 25%;
  display: flex;
  padding: 15% 0 0 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonRow= styled.div`
  width: 100%;
  display: flex;
  margin: 1% 0 0 0;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileButton= styled.button`
  padding: 3px;

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ProfileLower= styled.div`
  height: 25%;
  display: flex;
  padding: 0 0 0 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileNav= styled.nav`
  width: 100%;
  border-bottom: 1px solid #999;
  

  ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
  }

  li{
    margin: 0 0 0 5%;
    
  }

  .active{
    border-bottom: 1px solid red;
  }
`;

const ProfileDynamic= styled.div`
  padding: 1% 0 0 0;
  width: 100%;
  height: 30%;
`;

export {ProfileNav, ProfileLower, ProfileButton, ProfileCont, ProfileMid, ButtonRow, ProfileDynamic};