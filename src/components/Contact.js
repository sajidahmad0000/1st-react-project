import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { companyName } = useContext(UserContext);
  return (
    <div className="p-4 m-4 w-[250px]  bg-gray-200  rounded-lg  items-center justify-center hover:border-2 border-gray-200  hover:bg-white  ">
      <h1 className="font-bold"> EMAIL-sajid01@gmail.com</h1>
      <h1 className="font-bold">PHONE-99XXXXXXX6</h1>
      <h5>{companyName}</h5>
    </div>
  );
};

export default Contact;
