import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { useState } from "react";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const itemCounts = useSelector((state) => state.cart.itemCounts);
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const removeitem = (item) => {
    dispatch(removeItems(item));
  };

  // count[(addcount, setaddcount)] = useState();
  return (
    <div className="m-4">
      {items.map((item) => (
        <div
          className="py-3 border-b-2 border-gray-200 flex justify-between  "
          key={item.card.info.id}
        >
          <div className="w-10/12">
            <div className="  text-left mx-4 py-2 font-semibold  ">
              <span>{item.card.info.name}</span>
              <span className=" pl-7">
                {"  "}₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs mx-4">{item.card.info.description}</p>
          </div>
          <div className="w-2/12  pb-4 ">
            <img src={CDN_URL + item.card.info.imageId} />
            <button
              className="border-2 border-gray-200 shadow-lg rounded-md  p-1 bg-black text-gray-50 "
              onClick={() => handleAddItem(item)}
            >
              ADD +{itemCounts[item.card.info.id]}
            </button>
            {/* <span className="px-2 text-gray-600">
              {itemCounts[item.card.info.id] || 0}
            </span> */}
            <button
              onClick={() => removeitem(item)}
              className="border-2 border-gray-200 shadow-lg rounded-md  px-2 bg-black text-gray-50 "
            >
              {"-"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
