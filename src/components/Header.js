import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setbtnname] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg  items-center bg-yellow-400">
      <div className="bg-transparent">
        <img className="w-40  " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex  items-center p-0 m-0  ">
          <li className=" ml-2 p-3  hover:border-solid hover:border-2 hover:rounded-3xl truncate hover:bg-gray-100">
            {" "}
            ONLINE :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className=" p-3  hover:border-solid hover:border-2 hover:rounded-3xl truncate hover:bg-gray-100"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="p-3  hover:border-solid hover:border-2 hover:rounded-3xl truncate hover:bg-gray-100  "
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="  p-3  hover:border-solid hover:border-2 hover:rounded-3xl truncate hover:bg-gray-100  "
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              to="/instamart"
              className=" p-3  hover:border-solid hover:border-2 hover:rounded-3xl  hover:bg-gray-100 "
            >
              INSTAMART
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="  p-3  hover:border-solid hover:border-2 hover:rounded-3xl truncate hover:bg-gray-100  "
            >
              CART({cartItems.length})
            </Link>
          </li>

          <button
            className=" mr-4 p-3  hover:border-solid hover:border-2 hover:rounded-3xl  hover:bg-gray-100"
            onClick={() => {
              btnname === "LOGIN" ? setbtnname("LOGOUT") : setbtnname("LOGIN");
            }}
          >
            {btnname}
          </button>
          <li className="pr-2  ">{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
