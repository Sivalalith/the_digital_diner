import { useState, useEffect } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import axios from "axios";
// BE menu response json structure
/**
 * {
 *  "success": "true",
 *  "menu": [
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
  try {
    //console.log("before axios get");
    const rawData = await axios.get("http://localhost:3000/menu");
    //console.log("after axios get");
    //console.log(rawData);
    const categorizedData = categorizeMenuData(rawData.data.menu);
    return categorizedData;
  } catch (err) {
    console.error("Error occurred while fetching menu data");
  }
};

const categorizeMenuData = (data) => {
  const groupedMenu = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return groupedMenu;
};

const filterMenuBySearchQuery = (menuData, searchQuery) => {
  const lowerCaseQuery = searchQuery.toLowerCase();

  const filteredData = Object.entries(menuData).reduce(
    (acc, [category, items]) => {
      const matchedItems = items.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseQuery)
      );

      if (matchedItems.length > 0) {
        acc[category] = matchedItems;
      }

      return acc;
    },
    {}
  );

  return filteredData;
};

const Menu = ({ searchQuery }) => {
  // fetchDataFromDb()
  // store BE json data in 'allItems' state var.
  const [allItems, setAllItems] = useState({});
  const [filteredItems, setFilteredItems] = useState({});

  useEffect(() => {
    fetchDataFromDb()
      .then((data) => {
        setAllItems(data);
        setFilteredItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredItems(allItems); // Reset to all items
      return;
    }

    const filtered = filterMenuBySearchQuery(allItems, searchQuery);
    setFilteredItems(filtered);
  }, [searchQuery, allItems]);

  // filteredItems state var -> to store the items filtered by search query

  return (
    <div className="flex flex-col items-center p-2 m-2">
      <div
        data-testid="restr-basic-info"
        className="flex flex-col items-center"
      ></div>
      {Object.entries(filteredItems).map(([category, items]) => (
        <ItemList key={category} title={category} items={items} />
      ))}
    </div>
  );
};

export default Menu;
