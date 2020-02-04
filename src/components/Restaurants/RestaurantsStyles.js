import styled from 'styled-components';
import '../../Styles/styleVars';

const FavDispCont= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
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

export {
  FavDispCont,
  FavImgCont,
  FavoritesRow
};