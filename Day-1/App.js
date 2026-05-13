import ReactDOM from "react-dom/client";

/**
 * how to create h1 tag in react.
 *
 * example:
 * <h1>Hello World from Namaste react</h1>
 */

// const createdElement = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     abc: "children", //
//   },
//   "Hello World from Namaste react"
// );
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

/*
// const nestedElement = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { key: "1" }, "hello episode one  "),
//     React.createElement("h1", { key: "2" }, "I am second one"),
//     React.createElement("h1", { key: "3" }, "I am third one"),
//   ])
// );
*/

// JSX

// const heading = <h1>Hello React From JSX</h1>;

// React Component

const HeadingComponent = () => (
  <div className="heading">
    <h2>This is heading component.</h2>
  </div>
);

// React Component Composition
//// This is what component composition
const DescriptionComponent = ()=>(
  <div className="description">
    {HeadingComponent()}
    <HeadingComponent/>
    <h1>This is an DescriptionComponent</h1>
  </div>
)
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(<DescriptionComponent />);
