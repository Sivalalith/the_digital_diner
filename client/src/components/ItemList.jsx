import { useState } from "react";
import Item from "./Item";

const ItemList = ({ title, items }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[900px] xl:w-[1200px] flex flex-col justify-center items-center">
      <div className="bg-gray-100 flex justify-between m-2 p-5 w-[100%] rounded-lg shadow-lg">
        <span className="text-xl font-semibold ">
          {title} ({items.length})
        </span>
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "🔼" : "🔽"}
        </button>
      </div>
      <div className={isVisible ? "visible w-[99%]" : "hidden"}>
        {" "}
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
