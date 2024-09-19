import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;400;600&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
    }

    body{
        font-family: "Bai Jamjuree-semibold", sans-serif;
        color: #333;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        font-size: 18px
    }

    a{
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }

    span{
        display: inline-block;
    }

    button{
        cursor: pointer;
    }

`

export default GlobalStyle