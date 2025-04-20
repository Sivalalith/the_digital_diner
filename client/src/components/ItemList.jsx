import { useState } from "react";

const ItemList = ({ children }) => {
  const isSubSection = false,
    title = "Desserts";

  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      className={` w-[900px] flex flex-col justify-center items-center ${
        isSubSection ? "pl-4" : ""
      }`}
    >
      <div className="bg-gray-100 flex justify-between m-2 p-5 w-[100%] rounded-lg shadow-lg">
        <span
          className={`text-xl font-semibold ${isSubSection ? "text-base" : ""}`}
        >
          {title} ({children.length})
        </span>
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "🔼" : "🔽"}
        </button>
      </div>
      <div className={isVisible ? "visible w-[99%]" : "hidden"}>{children}</div>
    </div>
  );
};

export default ItemList;
