import ItemsList from "./ItemsList";

const RestaurantCategory = ({
  data,
  showItems,

  toggleCategory,
}) => {
  // const [showitems, setshowitems] = useState(false);

  // const handleclick = () => {
  //   setshowIndex();
  // };
  return (
    <div className="  w-6/12 m-auto py-6 shadow-lg rounded-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleCategory}
      >
        <span className=" px-4 font-bold ">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="px-3">{showItems ? "▲" : "▼"}</span>
      </div>
      <div>{showItems && <ItemsList items={data.itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
