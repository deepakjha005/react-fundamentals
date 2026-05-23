import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const nestedRoot = ReactDOM.createRoot(document.getElementById("root"));
nestedRoot.render(<App />);
