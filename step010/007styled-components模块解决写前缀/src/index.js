import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";

const Button = styled.button`
  border-radius: 3px;
  border: 1px solid #666;
  color: #333;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <div className="App">
      <Button>按钮</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
