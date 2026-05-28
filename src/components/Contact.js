import useComponent from "./useComponent";

const Contact = () => {
  const element = () => <h1>Hello Element</h1>;

  return (
    <div>
      {useComponent()}
      {element()}
    </div>
  );
};
export default Contact;
