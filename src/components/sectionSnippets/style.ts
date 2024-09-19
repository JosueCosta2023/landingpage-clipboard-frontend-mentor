import styled from "styled-components";


const StyledSection = styled.section`
    width: 1420px;
    max-width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledTitleSnippets = styled.div`
    width: 90%;
    text-align: center;
    margin-bottom: 80px;

    & > h3 {
        font-size: 36px;
        color: #4C545C;
        margin-bottom: 19px;
        letter-spacing: 0.5px;
    }

    & > p{
        width: 690px;
        max-width: 90%;
        margin: auto;
        line-height: 30px;
        color: #9EABB2;
    }
`

const StyledDetailSnippets = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 110px;
    & > img {
        width: 752px;
        max-width: 60%;
    }
    & > div {
        margin-top: 68px;
        margin-bottom: 98px;
        display: flex;
        flex-direction: column;
    }

    & > div > div {
        &:nth-child(2){
            margin-top: 56px;
            margin-bottom: 56px;
        }
    }

    & > div > div > h3{
        font-size: 24px;
        color: #4C545C;
        letter-spacing: 0.39px;
        margin-bottom: 8px;
        line-height: 30px;
    }
    & > div > div > p{
        line-height: 30px;
        font-size: 16px;
        color: #9EABB2;
        width: 350px;
    }

    @media(max-width:1280px){
        justify-content: center;
        align-items: center;
        gap: 50px;

        & > div{
            width: 100%;
            align-items: center;
            text-align: center;
        }
        & > div > div > p{
        line-height: 30px;
        font-size: 16px;
        color: #9EABB2;
        width: auto;
    }
    }
    
`

export {StyledSection, StyledTitleSnippets, StyledDetailSnippets}