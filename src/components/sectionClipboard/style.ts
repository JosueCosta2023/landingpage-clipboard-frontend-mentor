import styled from "styled-components";


const StyleClipboard = styled.section`
    width: 1400px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 146px;
    text-align: center;

    & > div{
        margin-bottom: 110px;
    }

    & > div > h3{
        font-size: 45px;
        line-height: 45px;
        width: 100%;
        letter-spacing: 0.59px;
        color: #4C545C;
        margin-bottom: 19px;
    }
    & > div > p{
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.14px;
        color: #9EABB2;
        margin-bottom: 19px;
        width: 90%;
        margin: auto;
    }

    & > img {
        width: 812px;
        max-width: 90%;
    }

    @media(max-width:1280px){
        margin-top: 46px;
    }
`

export {StyleClipboard}