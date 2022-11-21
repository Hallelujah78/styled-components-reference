import styled from "styled-components";

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline-green"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline-green {
    background: green;
    height: 5px;
    width: 90px;
    margin: 0 auto;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  .title {
    font-style: italic;
    color: var(--primary);
  }
`;

export default ComplexTitle;
