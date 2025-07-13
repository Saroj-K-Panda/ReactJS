
import React from "react";
import ReactDOM from "react-dom/client"; 

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },
    [
      React.createElement("h1", {}, "I am at h1 tag"),
      React.createElement("h2", {}, "I am at h2 tag")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    [
      React.createElement("h1", {}, "I am at h1 tag"),
      React.createElement("h2", {}, "I am at h2 tag")
    ]
  )
]);


const headingSP = React.createElement(
  "h2",
  { id: "heading", xyz: "abc" },
  "3rd July is the birthday for me !!! Happy BirthDay .."
);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(headingSP);

const jsxHading = <h1 id = "heading"> </h1>
console.log(jsxHading);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render = jsxHading;


