import React from "react";
class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("SecondComponent constructor");
  }
  componentDidMount() {
    console.log("SecondComponent componentDidMount");
  }
  render() {
    console.log("SecondComponent render");
    return <div>Second Component</div>;
  }
}
export default SecondComponent;
