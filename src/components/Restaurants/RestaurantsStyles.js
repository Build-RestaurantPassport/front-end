import styled from 'styled-components';
import {fontStyles} from '../../Styles/styleVars';

const FavDispCont= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const RestaurantsHeader= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 5% 0 3%;
`;

const SearchCont= styled.div`
  text-align: center;
  margin: 3% 0;

  input{
    width: 60%;
    padding: 5px 8px;
    border-radius: 11px;
    border: 1px solid #333;
  }
`;

const FavImgCont= styled.div`
  width: 90%;
  margin: 0 5% 0 0;

  img{
    width: 100%;
  }
`;

const FavoritesRow= styled.div`
  width: 125%;
  display: flex;
  padding: 0 3%;
  justify-content: space-evenly;
  align-items: center;
`;

const FavoritesNav= styled.div`
  width: 100%;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;

  a{
    text-decoration: underline;

    &:hover{
      cursor: pointer;
      opacity: 0.8;
      
    }
  }
`;

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
  RestaurantsHeader,
  SearchCont,
  FavDispCont,
  FavImgCont,
  FavoritesRow,
  FavoritesNav,
  RatingDisp
};