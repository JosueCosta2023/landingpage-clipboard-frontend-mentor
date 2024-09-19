import styled from "styled-components";

const HeadeStyle = styled.section`
  width: 100%;
  background-image: url("/public/images/bg-header-desktop.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  & > img {
    width: 125px;
    height: 125px;
    margin-top: 128px;
    margin-bottom: 56px;
  }
  
  & > h3 {
    font-size: 46px;
    font-weight: 600;
    margin-bottom: 16px;
    max-width: 730px;
    width: 90%;
    z-index: 2;
  }
  
  & > p {
    max-width: 730px;
    width: 90%;
    font-size: 20px;
    color: #9eabb2;
    z-index: 2;
  }
  & > div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    background-color: white;
    padding-top: 48px;
    padding-bottom: 150px;
    box-shadow: 0px -100px 100px white;
    z-index: 1;
  }

  & > div > button:first-child {
    background-color: #26bba4;
    font-weight: 600;
    letter-spacing: 2px;
  }
  & > div > button:last-child {
    background-color: #6174ff;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;

export { HeadeStyle };
