import React from "react";

class UserClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      otherState: 1,
    };
  }
  render() {
    const { name, description, learning, whySuper } = this.props;
    const { count, otherState } = this.state;
    return (
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "auto",
            borderRadius: 10,
            border: "1px solid purple",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>name: {name}</h3>
          <h3>learning: {learning}</h3>
          <h3>description: {description}</h3>
          <h3>whySuper: {whySuper}</h3>
          <div
            style={{
              justifyContent: "center",
            }}
          >
            <h1>{count}</h1>
            <h1>{otherState}</h1>
            <button
              onClick={() => {
                this.setState({
                  count: count + 1,
                  otherState: otherState - 1,
                });
              }}
              style={{ marginLeft: 10, height: 50 }}
            >
              Increase Count
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default UserClassBasedComponent;
