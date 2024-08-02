import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { companyName } = useContext(UserContext);
  const { resdata } = props;
  const {
    name,
    cloudinaryImageId,

    costForTwo,
    cuisines,
    avgRating,
  } = resdata?.info;

  return (
    <div className="p-4 m-4 w-[200px] bg-gray-200  rounded-lg  items-center justify-center hover:border-2 border-gray-200  hover:bg-white  shadow-2xl ">
      <img className=" rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className=" font-bold py-2 text-lg">{name}</h3>
      <h4 className="pb-2">{cuisines.join(", ")}</h4>

      <h4 className="pb-2">{costForTwo}</h4>
      <h4 className="pb-2">{avgRating} Ratings</h4>
      <h5>{companyName}</h5>
    </div>
  );
};

// Higher order component

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Open</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
