import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Roboto;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    /* }
body {
    background-color: #294F6B;
} */

.btn-primary {
    border: none;
    background-color: #4F7FA3;
    color: #FFF;
}
.btn-primary:hover {
    color: #fff;
    background-color: #4F7FA390;
    border: none;
}
.btn-secondary {
    border: none;
    background-color: #F9A31B;
    color: #FFF;
}
.btn-secondary:hover {
    border: none;
    background-color: #F9A31B90;
    color: #FFF;
}

h4 {
    color: #294F6B;
    font-weight: 600
}
    }
`;
