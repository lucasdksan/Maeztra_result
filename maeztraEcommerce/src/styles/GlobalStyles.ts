import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./themes";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${colors.main_white};
        padding: 0px;
        width: auto;
    }
    
    #root{
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
    }

    button,
    input {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    ul,
    li,
    ol {
        list-style: none;
    }

    p, 
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    fieldset {
        border: 0;
    }
`;