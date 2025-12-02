const heading = React.createElement(
  "div",
  { id: "heading" },
  [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2")
  ]
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    heading,
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am another h1"),
      React.createElement("h2", {}, "I am another h2"),
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
