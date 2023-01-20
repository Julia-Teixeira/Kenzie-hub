import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body{
    background: var(--color-grey-4);
  }

  button{
    border: none;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: var(--color-grey-4);
    cursor: pointer;
  }
  ul, li{
    list-style: none;
  }

  :root {

    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    
    --feedback-sucess: #3FE864;
    --feedback-negative: #E83F5B;

    --fontSize-1: 1.1421rem;
    --fontSize-2: 1.0152rem;
    --fontSize-3: 0.8883rem;
    --fontSize-4: 0.7614rem;
    --fontSize-5: 0.6016rem;


    --bold: 700;
    --semi-bold: 600;
    --regular: 400;
  }
`;
