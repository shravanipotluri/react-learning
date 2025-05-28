import React from "react";
import ReactDOM from "react-dom/client";

// JSX Syntax - JSX is not HTML inside Javascript but JSX is HTML like syntax
// React Element
const jsxHeading = <h1 id="heading">Hello World from JSX!!!</h1>;
console.log(jsxHeading);
// React Functional Component
const TitleComponent = () => {
  return <h1 id="title">Hello World from Functional Component!!!</h1>;
};
const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent></TitleComponent>
      <TitleComponent />
      {TitleComponent()}
      <h1>Creating Functional Component </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
