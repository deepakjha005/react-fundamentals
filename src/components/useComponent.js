import { useState } from "react";

const useComponent = () => {
  const [test] = useState("hello");
  return <div>{test}</div>;
};
export default useComponent;
