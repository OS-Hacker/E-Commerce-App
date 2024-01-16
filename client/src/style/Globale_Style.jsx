import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
font-family: 'Roboto', sans-serif;
}

html {
  /* 1rem = 10px */
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;
}
h1 {
  font-size: 5.5rem;
  font-weight: 600;
}

 h2 {
   font-size: 2.8rem;
   font-weight: 400;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 300;
}

a {
  text-decoration: none;
}
li {
  list-style: none;
}



@media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }

}

@media (max-width: ${({ theme }) => theme.media.tab}) {
    html{
        font-size:60%;
    }
  }
`;
