import React from "react";
class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("FirstComponent constructor");
  }
  componentDidMount() {
    console.log("FirstComponent componentDidMount");
  }
  render() {
    console.log("FirstComponent render");
    return <div>First Component</div>;
  }
}
export default FirstComponent;
