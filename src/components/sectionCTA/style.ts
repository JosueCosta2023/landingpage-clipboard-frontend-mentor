import styled from "styled-components";


const StyleCtaSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 0px;

    & > h2 {
        font-size: 36px;
        color: #4C545C;
        line-height: 45px;
        text-align: center;
    }

    & > p {
        margin-top: 19px;
        margin-bottom: 48px;
        width: 730px;
        max-width: 90%;
        text-align: center;
        line-height: 30px;
        color: #9EABB2;
    }

    & > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        letter-spacing: 0.5;
        & > button:first-child{
            background-color: #26BBA4;
        }
        & > button:last-child{
            background-color: #6174FF;
        }
    }

`

export {StyleCtaSection}