import React from "react";

// const About = () => {
//   return (
//     <div style={{ flex: 1 }}>
//       <div>
//         <h1>This is the about Us Page</h1>
//       </div>
//       <UserClassBasedComponent
//         name={
//           "Class Based Component used class keywords and extends from React Component."
//         }
//         learning={"passing props and receiving props in class based component."}
//         description={
//           "for recieving props in class based component we need to create constructor."
//         }
//         whySuper={"to call the parent component I guess."}
//       />
//     </div>
//   );
// };
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div style={{ flex: 1 }}>
        <div>
          <h1>This is the about Us Page</h1>
        </div>
        {/* <UserClassBasedComponent
          name={
            "Class Based Component used class keywords and extends from React Component."
          }
          learning={
            "passing props and receiving props in class based component."
          }
          description={
            "for recieving props in class based component we need to create constructor."
          }
          whySuper={"to call the parent component I guess."}
        /> */}
        {/* <SecondComponent /> */}
      </div>
    );
  }
}
export default About;
