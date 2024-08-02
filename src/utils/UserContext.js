import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "DefaultUser",
  owned: "SWIGGY",
});

export default UserContext;
