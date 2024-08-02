import RestaurantCard from "./RestaurantCard";

import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRest from "../utils/useListOfRest";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listofRestaurant, filterList, setfilterList] = useListOfRest();
  console.log(listofRestaurant);

  const [searchText, setsearchText] = useState("");
  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { userName, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className="m-4 p-4 font-bold">
        Looks like you are offline , check your internet connection!!!!!
      </h1>
    );
  }
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ">
      <div className="m-4 px-5 flex justify-center items-center ">
        <div className="search flex">
          <input
            type="text"
            className=" p-2 mr-4  border-2 rounded-lg  shadow-lg "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="mr-2 p-2  shadow-lg  rounded-lg bg-gray-200  hover:bg-white hover:border-2 border-gray-200 "
            onClick={() => {
              console.log(searchText);
              //filter the restaurant and update the UI
              const searchFilter = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterList(searchFilter);
            }}
          >
            SEARCH
          </button>
        </div>
        <button
          className=" p-2  rounded-lg  shadow-lg bg-gray-200  hover:bg-white hover:border-2 border-gray-200"
          onClick={() => {
            const filteredRestaurant = listofRestaurant.filter(
              (res) => res?.info?.avgRating > 4
            );
            setfilterList(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="flex justify-center items-center">
          <label className="px-3 font-semibold ">USERNAME</label>
          <input
            type="text"
            className="p-2 mr-4  border-2 rounded-lg  shadow-lg"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex flex-wrap justify-center  ">
        {filterList.map((rest) => (
          <Link
            key={rest?.info?.id}
            to={"/restaurants/" + rest?.info?.id}
            className="style"
          >
            {/* {rest.info.isOpen ? (
              <RestaurantCardPromoted resdata={rest} />
            ) : (
              <RestaurantCard resdata={rest} />
            )} */}
            <RestaurantCard resdata={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
