import { createGlobalStyle } from "styled-components";
import { Palette } from "./Variable";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root, main {
        height: 100%;
        width: 100%;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Palette.mainBgColor};
        color: white;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
