import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
body {
    background-image: linear-gradient(to left, #0e7470, #006d87, #00617d);
}
`;

export default Globalstyles;
