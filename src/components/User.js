import { useEffect, useState } from "react";

const User = () => {
  const [userInform, setUserInform] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    setUserInform(json);
  };

  return (
    <div className=" m-4 p-4 w-[300px] bg-gray-200 hover:border-2 hover:border-gray-200 rounded-lg">
      <img className="w-[300px] rounded-lg" src={userInform.avatar_url} />
      <h2 className=" font-semibold py-2">Name: {userInform.name}</h2>
      <h2 className=" font-semibold ">Location: {userInform.location}</h2>
    </div>
  );
};

export default User;
