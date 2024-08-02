import { useEffect, useState } from "react";
import { REST_API } from "./constants";

const useListOfRest = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filterList, setfilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    setlistofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [listofRestaurant, filterList, setfilterList];
};
export default useListOfRest;
