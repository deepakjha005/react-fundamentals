/**
 * how to create h1 tag in react.
 *
 * example:
 * <h1>Hello World from Namaste react</h1>
 */

// const createdElement = React.createElement("h1", {
//     id:"heading",
//     abc:"children" //
// }, "Hello World from Namaste react");
// const addedInRoot = ReactDOM.createRoot(document.getElementById("root"));
// addedInRoot.render(createdElement);

/**
 * how to create nested html in react.
 *
 * example:
 * <div id ="parent">
 * <div id = "child">
 * <h1></h1>
 * </div>
 *  <div>
 *
 * yes we can do this by passing third argument as new createElement method.
 */

/**
 * const nestedElement = React.createElement("div", {id:"parent"},  React.createElement("div", {id:"child"},  React.createElement("h1", {}, "Yes this is nested h1 tag")) );
  const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
  nestedRoot.render(nestedElement);
 */

/**
 * how to create nested html and its have multiple h1 tag in react.
 *
 * example:
 * <div id ="parent">
 * <div id = "child">
 * <h1>hello I am first one</h1>
 * <h1>I am second one</h1>
 * <h1>I am third one</h1>
 * </div>
 *  <div>
 *
 * yes we can by passing third argument in an array.
 *
 *
 */

const nestedElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello I am first one"),
    React.createElement("h1", {}, "I am second one"),
    React.createElement("h1", {}, "I am third one"),
  ])
);
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(nestedElement);
