import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;  
`;

export default function App() {
  return (
    <>
      {/* apply our GlobalStyles from GlobalStyles.js file (this does not accept children components) */}
      <GlobalStyles />
      <StyledApp>
        {/* we can also send props to our Styled Components */}
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert('Check in')}>Check in</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}