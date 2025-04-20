import React from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import axios from "axios";
// BE menu response json structure
/**
 * {
 *  "success": "true",
 *  "data": [
 *   {
 *    "name":"Pastry",
 *    "cost":"20.5",
 *    "description":"Nice tasty cake",
 *    "category":"Desserts"...
 *    },
 *   {
 *    "name":"Cold Coffee",
 *    "cost":"25.5",
 *    "description":"Nice cool coffee",
 *    "category":"Drinks"...
 *    },
 *   {...}
 *   ]
 * }
 */

const fetchDataFromDb = async () => {
  const data = await axios.get("http://localhost:3000/menu");
  if (data) {
    console.log(data);
  }
};

const Menu = ({ searchQuery }) => {
  // fetchDataFromDb()
  // store BE json data in 'allItems' state var.

  // filteredItems state var -> to store the items filtered by search query
  fetchDataFromDb();

  return (
    <div className="flex flex-col items-center p-2 m-2">
      <div
        data-testid="restr-basic-info"
        className="flex flex-col items-center"
      ></div>
      <ItemList children={[<Item />, <Item />, <Item />, <Item />]} />
    </div>
  );
};

export default Menu;
