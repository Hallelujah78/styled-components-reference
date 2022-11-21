// Macro - friendly class names, css prop
import styled from "styled-components/macro";
import Button from "@mui/material/Button";
// global styles with styled components
import { createGlobalStyle } from "styled-components";
// Theming - ThemeProvider
import { ThemeProvider } from "styled-components";
//Animations in styled components
import { keyframes } from "styled-components";
//css helper function
import { css } from "styled-components";

// attrs method with input
const Input = styled.input.attrs((props) => {
  return {
    type: props.type || "email",
  };
})`
  //conditional formating based on type
  ${({ type }) => {
    return (
      type === "email" &&
      css`
        background: green;
      `
    );
  }}
`;

//Animation - set up, example, loading spinner
const spinner = keyframes`
to{
  transform: rotate(360deg);
}`;

// Themed dark and light example
const BaseTheme = {
  color: "#222",
  background: "#fff",
};

const DarkTheme = {
  color: "#fff",
  background: "#222",
};
// End of themes set up - hint, you can toggle themes using useState [theme, setTheme], a button, a click handler. Set theme by passing into ThemeProvider => <ThemeProvider theme={theme}>

// utils global CSS variables approach start
const colors = {
  primary: "#645cff",
};
// end of utils global CSS variables approach

// global styles with styled components approach
const GlobalStyles = createGlobalStyle`
:root{
font-family: 'Times New Roman', Times, serif;
}
`;

//BasicTitle
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  // conditional formatting with short-circuit using props
  color: ${(props) => props.special && "red"};
  // conditional formatting with css helper function
  ${({ small }) =>
    small &&
    css`
      text-transform: uppercase;
      color: cyan;
      font-style: italic;
    `}
`;
//End of BasicTitle

//AdvancedTitle
const AdvancedTitle = styled(BasicTitle)`
  text-transform: uppercase;
  color: ${({ special }) => {
    return special ? "green" : "darkgray";
  }};
`;
//End of Advanced Title

//ComplexTitle
const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div></div>
      <div className="underline-primary"></div>
      <article>
        <p>this is a paragraph nested in an article in a Wrapper</p>
      </article>
      <p>this is a paragraph in Wrapper</p>
      {/* CSS prop */}
      <footer
        css={`
          color: yellow;
        `}
      >
        this uses the CSS prop
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // use our theme's CSS values in styled component as props
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  //media query in styled component
  @media (min-width: 768px) {
    max-width: 30vw;
  }
  //hover container - the styled div itself
  &:hover {
    cursor: pointer;
  }
  p {
    color: gray;
    margin-bottom: 2rem;
  }
  //hover
  p:hover {
    background: green;
    color: #fff;
  }
  h1 {
    text-transform: capitalize;
    text-align: center;
    //& inside the h1 refers to the h1
    &:hover {
      text-transform: uppercase;
    }
  }
  div {
    height: 5px;
    background: orange;
    width: 20vw;
    margin: 2rem auto;
  }
  article {
    width: 30vw;
    margin: 0 auto;
    //nested styles
    p {
      color: chartreuse;
    }
  }
  .underline-primary {
    margin-top: 1rem;
    background: ${colors.primary};
    //Animation - okay, so our underline is spinning
    animation: ${spinner} 0.6s infinite linear;
  }
`;
// end of wrapper for complextitle

function App() {
  return (
    <div>
      {/* global styles with styled components - place at head */}
      <GlobalStyles />

      {/* Themes - wrap the app */}
      <ThemeProvider theme={DarkTheme}>
        <BasicTitle special>Basic Title</BasicTitle>
        <AdvancedTitle special>Advanced Title</AdvancedTitle>

        {/* material-ui button */}
        <Button color="secondary" variant="contained">
          click me
        </Button>
        {/* button as anchor/href */}
        <Button
          as="a"
          href="http://google.com"
          style={{ textDecoration: "none" }}
          color="primary"
          variant="contained"
        >
          click me
        </Button>
        {/* complex title */}
        <ComplexTitle title="Complex title"></ComplexTitle>
        {/* css helper */}
        <BasicTitle small>CSS Helper</BasicTitle>
        {/* attrs example, input defaults to email */}
        <Input type="date"></Input>
        <Input></Input>
      </ThemeProvider>
    </div>
  );
}

export default App;
