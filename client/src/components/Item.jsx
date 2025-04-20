import React from "react";

const Item = () => {
  const name = "Pastry",
    cost = 20,
    description = "Tasty cake",
    IMG_CDN_URL =
      "https://cdn.pixabay.com/photo/2019/11/15/12/14/choco-4628282_1280.jpg",
    itemCount = 1;
  return (
    <>
      <div
        className="bg-gray-100 pr-2 mr-2 mb-2 flex justify-between h-[200px]
        w-[100%] rounded"
      >
        <div className="w-[60%]">
          <span className="block py-5 px-2 font-semibold">
            {name} - Rs.{cost / 100}
          </span>
          <p className="block px-2 text-[#20212599]">{description}</p>
        </div>
        <div className="relative p-4 flex flex-col gap-y-0">
          <img
            src={IMG_CDN_URL}
            alt="an image of the dish"
            className="h-36 w-40  rounded"
          ></img>
          {itemCount === 0 ? (
            <button
              className="bg-white hover:bg-gray-300/50 text-green-600 relative  p-1 mt-0.5 rounded font-semibold"
              onClick={() => {}}
            >
              ADD
            </button>
          ) : (
            <div className=" group flex w-[100%] justify-center items-center gap-4 bg-white hover:bg-gray-100 p-1 mt-0.5 rounded font-semibold">
              <button
                className="bg-white group-hover:bg-gray-100 text-green-600"
                onClick={() => {}}
              >
                ➖
              </button>
              <span>{itemCount}</span>
              <button
                className="bg-white group-hover:bg-gray-100 text-green-600"
                onClick={() => {}}
              >
                ➕
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
//   return (
//     <div>

//       <span>Name</span>
//       <span>Cost</span>
//       <span>Veg</span>
//       <p>Description</p>
//       <img />
//       <button>ADD</button>
//     </div>
//   );

export default Item;
