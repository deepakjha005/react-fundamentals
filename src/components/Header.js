import { useContext } from "react";
import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constants";
import { headerData } from "../utils/headerData";
import { default as userContext } from "./UserContext";

const Header = () => {
  const names = ["Rahul", "Amit", "Priya", "Neha", "Karan"];
  const { userName, setUpdateUserName } = useContext(userContext);
  const changeName = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setUpdateUserName(randomName);
  };
  return (
    <div className="flex justify-between align-middle pt-2 shadow-md mb-10">
      <div className="w-14">
        <img src={HEADER_LOGO} className="img-style" alt="" />
      </div>
      <div className="flex">
        {headerData.map((item) => {
          return (
            <div key={item.id} className="p-4">
              <Link to={item.link}>
                <h3>{item.label}</h3>
              </Link>
            </div>
          );
        })}
        <div className="p-4 mx-1 cursor-pointer" onClick={changeName}>
          <h3>{userName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
