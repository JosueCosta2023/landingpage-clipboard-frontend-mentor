import styled from "styled-components";

const StyleWorkflow = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyleTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  text-align: center;
  margin-top: 160px;
   & > h3 {
    font-size: 36px;
    color: #4C545C;
    margin-bottom: 19px;
   }

   & > p{
    font-size: 18px;
    color: #9EABB2;
   }
`;

const StyleCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 72px;
  margin-bottom: 150px;

  & > div {
    max-width: 70%;
    min-width: 300px;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 216px;
  }

  & > div > img {
    margin-bottom: 44px;
    width: 35px;
  }

  & > div > h4 {
    margin-bottom: 16px;
    color: #4c545c;
    font-size: 24px;
  }

  & > div > span{
    display: inline-block;
    color: #9EABB2;
    font-size: 16px;
  }
`;

const StyleCardsLogos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 95px;
    flex-wrap: wrap;
    width: 90%;
    & > div {
        width: 165px;
    }
`

export { StyleWorkflow,StyleCardsLogos, StyleTitles, StyleCards };
