import styled from "styled-components";


const HeaderStyle  = styled.header`
    width: 100%;
    background-image: url('/public/images/bg-header-desktop.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 48px;

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
    }

    & > p {
        max-width: 730px;
        width: 90%;
        font-size: 20px;
        color: #9EABB2;
        
    }
`

export {HeaderStyle}