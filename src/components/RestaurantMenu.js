import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const params = useParams();
  // console.log(params);
  const resMenu = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (resMenu === null) return <ShimmerMenu />;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);

  // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenu?.cards[2]?.card?.card?.info;

  const toggleCategory = (index) => {
    setshowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" text-center">
      <h1 className="font-bold p-3 my-3 text-xl">{name} </h1>
      <h2 className="font-semibold py-1 text-lg">{cuisines.join(", ")}</h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          toggleCategory={() => toggleCategory(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
