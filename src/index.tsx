import * as React from "react";
import { render } from "react-dom";

const initializeApp = () => {
  render(<App name="marciano" />, document.querySelector("main"));
};

export interface HelloProps {
  name: string;
}

const App = (props: HelloProps) => {
  return <h1>Hello, {props.name}</h1>;
};

initializeApp();

export default App;
