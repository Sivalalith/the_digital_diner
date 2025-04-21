import { addItem, removeItem } from "../utils/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Item = ({ item }) => {
  const { name, cost, description, imageUrl, veg, rating } = item;

  const storeItems = useSelector((store) => store.cart.items);

  const itemFromStore = storeItems.find((item) => item.name === name);
  let itemCount;
  if (itemFromStore === undefined) {
    itemCount = 0;
  } else {
    itemCount = itemFromStore.count;
  }
  const dispatch = useDispatch(); // to dispatch an action to the store who forwards it later to the 'reducer'

  const handleAddItem = (
    name,
    cost,
    description,
    imageUrl,
    veg,
    rating,
    itemCount
  ) => {
    dispatch(
      addItem({
        name: name,
        description: description,
        cost: cost,
        imageUrl: imageUrl,
        veg: veg,
        rating: rating,
        count: itemCount + 1,
      })
    ); // when item added (action), we dispatch it to the store
  };

  const handleRemoveItem = (
    name,
    cost,
    description,
    imageUrl,
    veg,
    rating,
    itemCount
  ) => {
    dispatch(
      removeItem({
        name: name,
        description: description,
        cost: cost,
        imageUrl: imageUrl,
        veg: veg,
        rating: rating,
        count: itemCount - 1,
      })
    ); // when item added (action), we dispatch it to the store
  };
  return (
    <>
      <div
        className="bg-gray-100 pr-2 mr-2 mb-2 flex justify-between h-[200px]
        w-[100%] rounded"
      >
        <div className="w-[60%]">
          <span className="block py-5 px-2 font-semibold">
            {name} - Rs.{cost}
          </span>
          <p className="block px-2 text-[#20212599]">{description}</p>
          {veg ? <p>Veg 🟩</p> : <p>Non-veg 🟥</p>}
          <p>{rating} ⭐</p>
        </div>
        <div className="relative p-4 flex flex-col gap-y-0">
          <img
            src={imageUrl}
            alt="an image of the dish"
            className="h-36 w-40  rounded"
          ></img>
          {itemCount === 0 ? (
            <button
              className="bg-white hover:bg-gray-300/50 text-green-600 relative  p-1 mt-0.5 rounded font-semibold"
              onClick={() => {
                handleAddItem(
                  name,
                  cost,
                  description,
                  imageUrl,
                  veg,
                  rating,
                  itemCount
                );
              }}
            >
              ADD
            </button>
          ) : (
            <div className=" group flex w-[100%] justify-center items-center gap-4 bg-white hover:bg-gray-100 p-1 mt-0.5 rounded font-semibold">
              <button
                className="bg-white group-hover:bg-gray-100 text-green-600"
                onClick={() => {
                  handleRemoveItem(
                    name,
                    cost,
                    description,
                    imageUrl,
                    veg,
                    rating,
                    itemCount
                  );
                }}
              >
                ➖
              </button>
              <span>{itemCount}</span>
              <button
                className="bg-white group-hover:bg-gray-100 text-green-600"
                onClick={() => {
                  handleAddItem(
                    name,
                    cost,
                    description,
                    imageUrl,
                    veg,
                    rating,
                    itemCount
                  );
                }}
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
