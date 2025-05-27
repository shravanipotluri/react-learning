import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!!!"
);
// React.createElement is a function that creates a react element.
// The first argument is the type of element to create.
// The second argument is an object that contains the properties of the element or attributes of the element or tag
// The third argument is the children of the element.
// The children can be a string or an array of elements.
// The React.createElement function returns a react element.
// The react element is a plain object that describes the element.
// The react element is not a real DOM element.
const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.createRoot is a function that creates a root for the react element.
// The first argument is the DOM element where the react element will be rendered.
// The createRoot function returns a root object that can be used to render the react element.
// The root object is used to render the react element.
// The root object is used to update the react element.
root.render(heading);
// The render function is used to render the react element.

//Nested React Elements
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(parent);

// If we want to have two children in the parent element, we can do it like this
// const parent1 = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );
// const root3 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(parent1);

// If we have to create 2 children in the parent element, we can do it like this. But it is becoming complex and unmaintainable.so we use JSX syntax.
// JSX syntax is a syntax extension for JavaScript that looks similar to HTML.
// JSX syntax is used to create react elements.
// const parent2 = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { key: 1234 }, "I am an h1 tag"),
//     React.createElement("h2", { key: 1235 }, "I am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { key: 1236 }, "I am an h1 tag"),
//     React.createElement("h2", { key: 1237 }, "I am an h2 tag"),
//   ]),
// ]);
// const root4 = ReactDOM.createRoot(document.getElementById("root"));
// root4.render(parent2);
