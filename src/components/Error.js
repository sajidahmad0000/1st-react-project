import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="p-4 m-4 w-[250px] font-bold bg-gray-200  rounded-lg  items-center justify-center  hover:border-2 border-gray-200  hover:bg-white">
      <h1>OOps!</h1>
      <h2>Something Went Wrong!</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
      <h3>{err.data}</h3>
    </div>
  );
};
export default Error;
