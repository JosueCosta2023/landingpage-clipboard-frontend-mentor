import styled from "styled-components";

const StyleFooter = styled.footer`
  width: 100%;
  display: flex;
  background-color: rgba(158, 171, 178 ,0.1);
  align-items: center;
  justify-content: center;
  
  & > div {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    align-items: center;
    justify-content: center;
    padding: 0px 45px;
    padding: 39px 165px;
    gap: 40px;
  }

  & > div > img {
    width: 55px;
    height: 55px;
  }

  & > div > nav{
    margin-left: 150px;

    @media(max-width: 1024px){
        margin-left: 0;
    }
  }

  & > div > nav > ul {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 30px;
    justify-content: center;

    

    @media(max-width:768px){
        grid-template-columns: repeat(2,auto);
    };
    @media(max-width: 480px){
        grid-template-columns: repeat(1,auto);
        text-align: center;

    };
  }

  & > div > nav > ul > li {
    list-style: none;
    cursor: pointer;
    width: 150px;
    font-size: 18px;
    color: #4C545C;
    line-height: 30px;
  }

  & > div > ul {
    display: flex;
    gap: 24px;
    margin-left:165px ;
    margin: auto;
}

& div > ul >li {
    list-style: none;
    width: 24px;
    height: 24px;
  }

  & div > ul > li > img{
    width: 100%;
    height: 100%;
  }
`;

export { StyleFooter };
